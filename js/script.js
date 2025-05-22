document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('.carrossel');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('ativo'));

      
      link.classList.add('active');
      const targetId = link.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('ativo');
      }
    });
  });

  // Botão topo
  const btnTopo = document.getElementById('btn-topo');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    }).then(() => {
      form.reset();
      document.querySelector('.mensagem-sucesso').style.display = 'block';
    }).catch((error) => {
      alert('Erro ao enviar a mensagem.');
      console.error(error);
    });
  });
});

