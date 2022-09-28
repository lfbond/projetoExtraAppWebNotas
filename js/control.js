$(function () {
  $('.btn-add').click(function () {
    var el =
      '<div class="anotacao-single"><textarea placeholder="Sua Anotação..."></textarea></div>'
    $('.container-anotacoes').append(el)

    var textArea = $('.anotacao-single').last().find('textarea')

    var date = new Date()
    var hora = date.getHours()
    var min = date.getMinutes()

    var finalTime = hora + ':' + min
    textArea.html('Nova Anotação em: ' + finalTime)
  })
})
