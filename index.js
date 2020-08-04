function main() {
  const shareBtn = document.querySelector('#shareBtn');
  const shareModal = document.querySelector('.social-share');
  const footer = document.querySelector('.card-footer');
  const authorInfo = document.querySelector('#author-info');
  const imageContainer = shareBtn.querySelector('.image-container');

  shareBtn.addEventListener('click', function (e) {
    if (!footer.classList.contains('share')) {
      footer.classList.add('share');
      authorInfo.classList.add('share');
      shareModal.classList.add('share');
      imageContainer.classList.add('share');
    } else {
      footer.classList.remove('share');
      authorInfo.classList.remove('share');
      shareModal.classList.remove('share');
      imageContainer.classList.remove('share');
    }
  });
}

main();
