// Function to simulate enrolling in the course
function enroll() {
  alert("You have successfully enrolled in the course!");
}

// Sample video data
const videos = [
  { id: "dQw4w9WgXcQ", title: "Introduction to JavaScript", duration: "20 min", views: "1500", completed: false },
  { id: "kJQP7kiw5Fk", title: "Variables and Data Types", duration: "25 min", views: "1200", completed: false },
  { id: "3J4pDOfK3bM", title: "Functions and Loops", duration: "30 min", views: "1800", completed: false },
  { id: "V-_O7nl0Ii0", title: "Objects and Arrays", duration: "40 min", views: "2000", completed: false },
  { id: "sBws8MSXN7A", title: "DOM Manipulation", duration: "35 min", views: "2200", completed: false }
];


// Render the video list dynamically
function renderVideoList() {
  const videoList = document.getElementById('video-list');
  videoList.innerHTML = ''; // Clear the existing list

  videos.forEach((video, index) => {
    const videoTitle = document.getElementById('video-title');
    videoTitle.innerHTML = `${video.title}`; 

      const li = document.createElement('li');
      li.innerHTML = `
          <div class="video-title">${video.title}</div>
          <div class="video-details">
              <span>Duration: ${video.duration}</span> | 
              <span>Views: ${video.views}</span> |
              <label class="video-checkbox">
              <input type="checkbox" ${video.completed ? 'checked' : ''} onclick="markAsCompleted(${index})"> Mark as Completed
              </label>
          </div>
          
      `;
      videoList.appendChild(li);
  });
}

// Mark a video as completed and navigate to next/previous
function markAsCompleted(index) {
  videos[index].completed = !videos[index].completed;
  renderVideoList();
  navigateVideo(index);
}

// Function to embed YouTube player for the selected video
function navigateVideo(index) {
  const videoId = videos[index].id;
  const iframe = document.getElementById('video-player');
  iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1&cc_load_policy=1`;

  // AI-generated summary (a simple placeholder for now)
  const aiSummary = generateAISummary(videos[index].title);
  document.getElementById('ai-summary').innerText = aiSummary;

  // Generate AI Questions based on video content
  generateAIQuestions(videos[index].title);

}

// AI-generated summary (static for now, can be improved with real AI integration)
function generateAISummary(videoTitle) {
  return `This video, titled "${videoTitle}", covers key concepts in JavaScript such as variables, data types, functions, and loops.`;
}

// AI-generated questions (simple examples for now)
function generateAIQuestions(videoTitle) {
  const questions = [
      `What is the main purpose of ${videoTitle}?`,
      `Explain the differences between primitive and non-primitive data types.`,
      `How do functions help in organizing code?`
  ];

  const questionsContainer = document.getElementById('ai-questions');
  questionsContainer.innerHTML = ''; // Clear previous questions

  questions.forEach(question => {
      const questionElement = document.createElement('p');
      questionElement.textContent = question;
      questionsContainer.appendChild(questionElement);
  });
}

// Save custom notes for the current video
function saveNotes() {
  const noteText = document.getElementById('note-text').value;
  alert("Your notes have been saved: " + noteText);
}

// Update the progress bar based on video completion
function updateProgress() {
  const totalVideos = videos.length;
  const completedVideos = videos.filter(video => video.completed).length;
  const progress = (completedVideos / totalVideos) * 100;

  document.getElementById('progress').style.width = `${progress}%`;
  document.getElementById('progress-text').innerText = `Progress: ${Math.round(progress)}%`;
}

// Save rating for the course
function saveRating() {
  const rating = document.getElementById('course-rating').value;
  alert(`You rated the course: ${rating} stars`);
}



// Initialize the page with the video list and the first video
function init() {
  renderVideoList();
  navigateVideo(0); // Start with the first video
  updateProgress();
  renderVideoTitle();
}

init();
