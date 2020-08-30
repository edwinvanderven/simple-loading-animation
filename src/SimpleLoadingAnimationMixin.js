export const SimpleLoadingAnimationMixin = (SuperClass) =>
  class extends SuperClass {
    static get properties() {
      return {
        text: { type: String },
      };
    }

    constructor() {
      super();
    }
  };