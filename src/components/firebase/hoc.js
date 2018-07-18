export default function(cb) {
  return function(comp) {
    comp.prototype.mountFirebase = function(url) {
      this.ref = cb.call(this, url);
    };

    comp.prototype.unmountFirebase = function() {
      try {
        this.ref.off();
      } catch (e) {}
    };

    comp.prototype.componentWillMount = function() {
      this.mountFirebase(this.props.url);
    };

    comp.prototype.componentDidUpdate = function(prevProps) {
      if (prevProps.url !== this.props.url) {
        this.unmountFirebase();
        this.mountFirebase(this.props.url);
      }
    };

    comp.prototype.componentWillUnmount = function() {
      this.unmountFirebase();
    };

    return comp;
  };
}
