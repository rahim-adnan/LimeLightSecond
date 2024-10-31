window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    // Adjusting the speed of scrolling for different layers
    document.getElementById('layer1').style.transform = `translateY(${scrollPosition * 0.3}px)`;  // Layer 1 moves at 0.3 speed
    document.getElementById('layer2').style.transform = `translateY(${scrollPosition * 0.25}px)`; // Layer 2 moves at 0.25 speed
    document.getElementById('layer3').style.transform = `translateY(${scrollPosition * 0.2}px)`;  // Layer 3 moves at 0.2 speed
    document.getElementById('layer4').style.transform = `translateY(${scrollPosition * 0.15}px)`; // Layer 4 moves at 0.15 speed
    document.getElementById('layer5').style.transform = `translateY(${scrollPosition * 0.1}px)`;  // Layer 5 moves at 0.1 speed
    document.getElementById('layer6').style.transform = `translateY(${scrollPosition * 0.05}px)`; // Layer 6 moves at 0.05 speed
});
