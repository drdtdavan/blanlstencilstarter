/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppTest {
    render() {
        return h("div", null, "test");
    }
    static get is() { return "app-test"; }
}

export { AppTest };
