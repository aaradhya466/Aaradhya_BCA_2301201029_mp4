document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('video-modal');
    const closeBtn = document.querySelector('.close-btn');
    const video = document.querySelector('#video-modal video');

    // Show the modal when the page loads
    modal.style.display = 'block';

    // Play the video when the modal is shown
    video.play();

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        video.pause(); // Pause the video when closing the modal
        video.currentTime = 0; // Reset the video to the beginning
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            video.pause(); // Pause the video when closing the modal
            video.currentTime = 0; // Reset the video to the beginning
        }
    });
});


