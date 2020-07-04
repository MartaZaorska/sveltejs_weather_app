<style>
  .spinner {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner__content {
    width: 130px;
    height: 130px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid rgba(52, 69, 88, 0.1);
    animation: pulse 0.6s ease infinite alternate;
  }

  .circle:nth-child(1) {
    animation-delay: 0s;
  }

  .circle:nth-child(2) {
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    animation-delay: 0.4s;
  }

  .circle:nth-child(4) {
    animation-delay: 0.6s;
  }

  @keyframes pulse {
    100% {
      transform: scale(1.3);
      border-color: rgba(52, 69, 88, 0.5);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    }
  }
</style>

<div class="spinner">
  <div class="spinner__content">
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
    <div class="circle" />
  </div>
</div>
