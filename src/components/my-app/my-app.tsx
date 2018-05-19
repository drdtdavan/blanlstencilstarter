import { Component } from '@stencil/core';


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
          <stencil-router>
            <stencil-route url='/' component='app-test' exact={true}>
            </stencil-route>            
          </stencil-router>
        </main>
      </div>
    );
  }
}
