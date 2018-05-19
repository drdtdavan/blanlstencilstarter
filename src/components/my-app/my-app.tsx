import { Component } from '@stencil/core';
import { RouterSwitch } from '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css'
})
export class MyApp {

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>
        <main>
          <RouterSwitch>
          <stencil-router>
            <stencil-route url='/' component='app-test' exact={true}>
            </stencil-route>            
          </stencil-router>
          </RouterSwitch>
        </main>
      </div>
    );
  }
}
