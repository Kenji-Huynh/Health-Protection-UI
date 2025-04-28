document.addEventListener("DOMContentLoaded", function () {
  const registerBtn = document.querySelector(".register-btn");

  if (registerBtn) {
    registerBtn.addEventListener("click", function () {
      // You can replace this with your actual registration logic
      alert("Cảm ơn bạn đã đăng ký ưu đãi!");
      // Or redirect to registration page
      // window.location.href = 'register.html';
    });
  }

  // Reset animations on every page load
  // First, make sure all items are hidden
  document.querySelectorAll(".promo-features li").forEach(function (item) {
    item.style.opacity = "0";
  });

  // Force a reflow to ensure animations will play again
  void document.querySelector(".promo-features").offsetWidth;

  // Then remove the 'style' attribute to let CSS animations take over
  setTimeout(function () {
    document.querySelectorAll(".promo-features li").forEach(function (item) {
      item.removeAttribute("style");
    });
  }, 50);

  // Cập nhật JavaScript để xử lý hover cho toàn bộ nhóm
  const serviceCircles = document.querySelector(".service-circles");
  if (serviceCircles) {
    // Dừng animation khi hover vào bất kỳ item nào
    serviceCircles.addEventListener("mouseenter", () => {
      serviceCircles.style.animationPlayState = "paused";
    });

    // Tiếp tục animation khi bỏ hover
    serviceCircles.addEventListener("mouseleave", () => {
      serviceCircles.style.animationPlayState = "running";
    });
  }

  // Service cards hover effects
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.opacity = "1";
    });

    card.addEventListener("mouseleave", () => {
      card.style.opacity = "0.85";
    });

    // Optional: Add click functionality
    card.addEventListener("click", () => {
      // You can add functionality here, such as redirecting to service detail page
      // window.location.href = 'service-detail.html';
      console.log(
        "Service clicked:",
        card.querySelector(".service-title").textContent
      );
    });
  });

  // Xử lý hiệu ứng hover cho các stat items
  const statItems = document.querySelectorAll(".stat-item");

  statItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const iconWrapper = item.querySelector(".stat-icon-wrapper");
      // Reset animation
      iconWrapper.style.animation = "none";

      // Trigger reflow
      void iconWrapper.offsetWidth;

      // Start animation
      iconWrapper.style.animation = "spinIcon 1.2s ease";
    });

    item.addEventListener("mouseleave", () => {
      const iconWrapper = item.querySelector(".stat-icon-wrapper");
      iconWrapper.style.animation = "none";
      iconWrapper.style.transform = "translateY(0)";
    });
  });
});
