 // Toggle audio list visibility
 const portfolioTitle = document.querySelector('.portfolio h2');
 const audioList = document.querySelector('.audio-list');

 portfolioTitle.addEventListener('click', () => {
     audioList.classList.toggle('active');
 });

 // Hover effect for audio items
 const audioItems = document.querySelectorAll('.audio-item');
 audioItems.forEach(item => {
     item.addEventListener('mouseover', () => {
         item.style.backgroundColor = '#3b2b4b'; /* Slightly lighter purple on hover */
         item.style.boxShadow = '0 0 5px #d4af37'; /* Subtle gold glow */
     });
     item.addEventListener('mouseout', () => {
         item.style.backgroundColor = '#2b1b3b'; /* Matches portfolio background */
         item.style.boxShadow = 'none';
     });
 });