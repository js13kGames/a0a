import Canvas from './canvas';
import Graphics from './graphics';
import Assets from './assets';

import Loop from './loop';
import Play from './play';

import Events from './events';

export function app(element, options) {

  let canvas = new Canvas(element);

  let events = new Events();
  events.bind();

  new Assets('assets/sprites.png')
    .start(sprites => {

      let graphics = new Graphics(canvas, 
                                  sprites);

      graphics.font('Arial', 16 * 5);

      let ctx = {
        g: graphics,
        e: events
      };

      let play = new Play(ctx);

      play.init();

      new Loop(() => {

        events.update();
        play.update();
        play.draw();

      }).start();
    });

}
