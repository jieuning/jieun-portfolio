// emailjs 호출
const sendEmail = () => {
  let templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send('service_9xiq6nr', 'template_rl9hnii', templateParams)
    .then((res) => {
      console.log(res);
      alert("메일이 성공적으로 발송되었습니다.");
    }, (error) => {
      console.log(error);
      alert("메일 전송에 실패했습니다.");
    });
};