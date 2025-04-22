var menuItem = document.querySelectorAll('.item');

function selectlink() {
    menuItem.forEach((itemm) =>
        itemm.classList.remove('ativo')
    );
    this.classList.add('ativo');
}

menuItem.forEach((itemm) =>
    itemm.addEventListener('click', selectlink)
);

// Seleciona botão e o menu lateral
var btnExp = document.querySelector('#btn-exp');
var ladomenu = document.querySelector('.menulateral');

// Quando clicar, alterna a classe expandir
btnExp.addEventListener('click', function () {
    ladomenu.classList.toggle('expandir');

    // Faz a faixa de categorias acompanhar o menu
    document.querySelector('.filtros-categorias').classList.toggle('expandida');
});

const filtros = document.querySelectorAll('.filtro');

filtros.forEach(btn => {
    btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
    });
});
