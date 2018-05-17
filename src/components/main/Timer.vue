<template>
  <div class="timer l_flex">
    <section class="timer__count-container">
      <div class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Arbeitszeit</h2>
        <p class="timer__count">
          <span class="timer__hours">{{overallWorkTime.utc().format('HH')}}</span>
          :
          <span class="timer__minutes">{{overallWorkTime.utc().format('mm')}}</span>
          :
          <span class="timer__seconds">{{overallWorkTime.utc().format('ss')}}</span>
        </p>
      </div>
      <div class="timer__count-wrapper">
        <h2 class="timer__label">Aktuelle
          <transition name="t_turn" mode="out-in"><span key="pause" v-if="paused">Pausenzeit</span><span key="work" v-else>Arbeitszeit</span>
          </transition>
        </h2>
        <p class="timer__count timer__count--small">
          <span class="timer__hours">{{currentTime.utc().format('HH')}}</span>
          :
          <span class="timer__minutes">{{currentTime.utc().format('mm')}}</span>
          :
          <span class="timer__seconds">{{currentTime.utc().format('ss')}}</span>
        </p>
      </div>
      <div class="timer__count-wrapper">
        <h2 class="timer__label">Gesamte Pausenzeit</h2>
        <p class="timer__count timer__count--small">
          <span class="timer__hours">{{overallPauseTime.utc().format('HH')}}</span>
          :
          <span class="timer__minutes">{{overallPauseTime.utc().format('mm')}}</span>
          :
          <span class="timer__seconds">{{overallPauseTime.utc().format('ss')}}</span>
        </p>
      </div>
    </section>

    <transition name="t_turn" mode="out-in">

      <section v-if="running" key="double" class="timer__button-container">
        <transition name="t_turn" mode="out-in">
          <div v-if="paused" key="resume" class="timer__button-wrapper timer__button-wrapper--small">
            <div class="timer__button btn btn--18 btn--round" v-on:click="resume()">
              <p>Weiter</p>
            </div>
          </div>
          <div v-else key="pause" class="timer__button-wrapper timer__button-wrapper--small">
            <div class="timer__button btn btn--18 btn--round" v-on:click="pause()">
              <p>Pause</p>
            </div>
          </div>
        </transition>
        <div class="timer__button-wrapper timer__button-wrapper--small">
          <div class="timer__button btn btn--18 btn--round" v-on:click="stop()">
            <p>Stop</p>
          </div>
        </div>
      </section>

      <section v-else key="single" class="timer__button-container">
        <div class="timer__button-wrapper">
          <div class="timer__button btn btn--18 btn--round" v-on:click="start()">
            <p>Start</p>
          </div>
        </div>
      </section>

    </transition>
  </div>
</template>

<script>
  import * as messageTypes from '../../classes/MessageTypes'

  const PERIOD_TYPE_PAUSE = 'pause';
  const PERIOD_TYPE_WORK = 'work';

  let createDay = function (self) {
    self.day.save({
      onOk: result => {
        self.$user.postDays(self.day, {
          onOk: days => {
            EventBus.$emit('daysLoaded');
            self.$user.loadDays('createdAt >= date(' + (new Date()).setHours(0, 0, 0, 0) + ')', {}, true);
          },
          onError: error => {
            EventBus.$emit('newMessage', {
              message: 'Oops! Scheint als hättest du keine Internetverbindung.',
              type: messageTypes.ERROR
            });
            console.log(error);
          }
        }, true)
      },
      onError: error => {
        EventBus.$emit('newMessage', {
          message: 'Oops! Scheint als hättest du keine Internetverbindung.',
          type: messageTypes.ERROR
        });
        console.log(error);
      }
    });
  };

  export default {
    name: 'timer',
    data() {
      return {
        running: false,
        paused: false,
        day: new Apiomat.Day(),
        periods: [],
        currentPeriod: undefined,
        overallWorkTime: moment(0),
        overallPauseTime: moment(0),
        currentTime: moment(0)
      }
    },
    beforeMount: function () {
      let self = this;

      EventBus.$on('daysLoaded', () => {
        this.day.loadPeriods('order by createdAt DESC', {
          onOk: periods => {
            if (periods.length !== 0) {
              this.currentPeriod = periods[0];
              this.periods = periods;
              this.updateTimers();
            }
          },
          onError: error => {
            console.log(error);
          }
        }, true);
      });

      this.$user.loadDays('createdAt >= date(' + (new Date()).setHours(0, 0, 0, 0) + ')', {
        onOk: days => {
          if (days.length === 0) {
            createDay(this);
          } else {
            this.day = days[0];
            EventBus.$emit('daysLoaded');
          }
        },
        onError: error => {
          createDay(this);
        }
      }, true);
      this.timerLoop();
    },
    methods: {
      start() {
        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {
            message: 'Oops! Scheint als hättest du keine Internetverbindung.',
            type: messageTypes.ERROR
          });
          return;
        }
        this.currentPeriod = new Apiomat.Period();
        this.periods.push(this.currentPeriod);
        let date = new Date();
        date.setMilliseconds(0);
        this.currentPeriod.setStart(date);
        this.currentPeriod.setPeriodType(PERIOD_TYPE_WORK);
        this.currentPeriod.save({
              onOk: result => {
                this.day.postPeriods(this.currentPeriod, {
                  onOk: result => {
                    this.running = true;
                  },
                  onError: error => {
                    console.log(error);
                  }
                })
              },
              onError: error => {
                console.log(error);
              }
            }
        );
        this.running = true;
      },
      stop() {
        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {
            message: 'Oops! Scheint als hättest du keine Internetverbindung.',
            type: messageTypes.ERROR
          });
          return;
        }
        let date = new Date();
        date.setMilliseconds(0);
        this.currentPeriod.setEnd(date);
        this.currentPeriod.save({
          onOk: result => {
          },
          onError: error => {
            console.log(error);
          }
        });
        this.currentTime = moment(0);
        this.running = false;
      },
      pause() {
        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {
            message: 'Oops! Scheint als hättest du keine Internetverbindung.',
            type: messageTypes.ERROR
          });
          return;
        }
        let date = new Date();
        date.setMilliseconds(0);
        this.currentPeriod.setEnd(date);
        this.currentPeriod.save({
          onOk: result => {
          },
          onError: error => {
            console.log(error);
          }
        });
        this.currentPeriod = new Apiomat.Period();
        this.periods.push(this.currentPeriod);
        this.currentPeriod.setStart(date);
        this.currentPeriod.setPeriodType(PERIOD_TYPE_PAUSE);
        this.currentPeriod.save({
              onOk: result => {
                this.day.postPeriods(this.currentPeriod, {
                  onOk: result => {
                    this.running = true;
                  },
                  onError: error => {
                    console.log(error);
                  }
                })
              },
              onError: error => {
                console.log(error);
              }
            }
        );
      },
      resume() {
        if (!navigator.onLine) {
          EventBus.$emit('newMessage', {
            message: 'Oops! Scheint als hättest du keine Internetverbindung.',
            type: messageTypes.ERROR
          });
          return;
        }
        let date = new Date();
        date.setMilliseconds(0);
        this.currentPeriod.setEnd(date);
        this.currentPeriod.save({
          onOk: result => {
          },
          onError: error => {
            console.log(error);
          }
        });
        this.currentPeriod = new Apiomat.Period();
        this.periods.push(this.currentPeriod);
        this.currentPeriod.setStart(date);
        this.currentPeriod.setPeriodType(PERIOD_TYPE_WORK);
        this.currentPeriod.save({
          onOk: result => {
            this.day.postPeriods(this.currentPeriod, {
              onOk: result => {
                this.running = true;
              },
              onError: error => {
                console.log(error);
              }
            })
          },
          onError: error => {
            console.log(error);
          }
        });
      },
      timerLoop: function () {
        if (this.running) {
          this.updateTimers();
        }
        setTimeout(function () {
            this.timerLoop();
        }.bind(this), 1000);
      },
      updateTimers: function () {
        let overallWorkTimestamp = 0;
        let overallPauseTimestamp = 0;
        let currentTimestamp = 0;

        for (let i = 0; i < this.periods.length; i++) {
          let period = this.periods[i];
          let date = new Date();
          date.setMilliseconds(0);

          switch (period.getPeriodType()) {
            case PERIOD_TYPE_PAUSE:
              if (period.getEnd()) {
                overallPauseTimestamp += period.getEnd() - period.getStart();
              } else {
                this.paused = true;
                this.running = true;
                currentTimestamp = date - period.getStart();
                overallPauseTimestamp += date - period.getStart();
              }
              break;
            case PERIOD_TYPE_WORK:
              if (period.getEnd()) {
                overallWorkTimestamp += period.getEnd() - period.getStart();
              } else {
                this.paused = false;
                this.running = true;
                currentTimestamp = date - period.getStart();
                overallWorkTimestamp += date - period.getStart();
              }
              break;
          }

          this.overallWorkTime = moment(overallWorkTimestamp);
          this.overallPauseTime = moment(overallPauseTimestamp);
          this.currentTime = moment(currentTimestamp);
        }
      }
    },
  }
</script>

<style scoped>
  .timer {
    position: relative;
    flex-grow: 1;
  }

  .timer__button-container {
    display: flex;
    justify-content: center;
    margin-top: auto;
  }

  .timer__button-wrapper {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .timer__button-wrapper--small {
    width: 40%;
    display: block;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .timer__button {
    background: var(--white-25);
  }

  .timer__button:active {
    background: var(--primary-color);
  }

  .timer__count-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .timer__count-wrapper {
    text-align: center;
  }

  .timer__label {
    font-size: 1.8rem;
    font-weight: 300;
    color: var(--white-50);
    margin-bottom: .6rem;
  }

  .timer__label span {
    display: inline-block;
  }

  .timer__count {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 4.4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2.6rem;
  }

  .timer__count--small {
    font-size: 3.2rem;
  }
  .timer__count span {
    font-family: 'Cutive Mono', monospace;
    font-size: 5.2rem;
  }
  .timer__count--small span {
    font-size: 3.6rem;
  }
</style>