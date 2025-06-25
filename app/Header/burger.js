// Функції для роботи з меню та свайпом

function handleSwipeGesture(touchStartX, touchEndX, touchStartY, touchEndY) {
    const horizontalDistance = touchStartX - touchEndX;
    const verticalDistance = Math.abs(touchStartY - touchEndY);

    return horizontalDistance > 70 && horizontalDistance > verticalDistance;
}

function toggleBurgersClasses(state) {
    return {
        burgerActive: !state.burgerActive,
        headerNavActive: !state.headerNavActive,
        bodyActiveModal: !state.bodyActiveModal,
    };
}

function closeMenu() {
    return {
        burgerActive: false,
        headerNavActive: false,
        bodyActiveModal: false,
    };
}

module.exports = {
    handleSwipeGesture,
    toggleBurgersClasses,
    closeMenu,
};