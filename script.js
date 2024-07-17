const wrapper = document.querySelector('.wrapper');
const input = wrapper.querySelector('input');
const button = wrapper.querySelector('button');
const img = wrapper.querySelector('img');
const downloadLink = wrapper.querySelector('#download-link');

img.addEventListener(
  'load',
  () => {
    wrapper.classList.add('active');
    button.innerText = 'Generate QR Code';
    downloadLink.href = img.src;
  },
);

button.addEventListener(
  'click',
  () => {
    const value = input.value.trim();
    button.innerText = 'Generating QR Code...';
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;
  },
);

input.addEventListener(
  'keyup',
  () => {
    if (!input.value.trim()) {
      wrapper.classList.remove('active');
    }
  },
);
