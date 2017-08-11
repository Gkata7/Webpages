$(document).ready(function(){
  var $documentBody = $('body'),
    $submissionModal = $('.submission-modal'),
    CLASS_NAMES = {
      OPEN: 'open',
      REQUEST_BUTTON: 'btn-info',
      SUBMISSION_MODAL: 'submission-modal',
      SUBMIT_FORM_BUTTON: 'btn-default'
  }

$documentBody.click(function(e){
  e.preventDefault();
  var $el = $(e.target),
    hasDemoRequestClass = $el.hasClass(CLASS_NAMES.REQUEST_BUTTON);
    isDemoSubmissionModal = $el.parents('.submission-modal').length || $el.hasClass(CLASS_NAMES.SUBMISSION_MODAL),
    isSubmitFormButton = $el.hasClass(CLASS_NAMES.SUBMIT_FORM_BUTTON),
    formData = {};

  if(hasDemoRequestClass){
    $('.confirmation').addClass('none');
    $('.form-container').removeClass('none');
    $submissionModal.addClass(CLASS_NAMES.OPEN);
  }else if(isSubmitFormButton){
    handleSubmit()
  }else if(!isDemoSubmissionModal){
    $submissionModal.removeClass(CLASS_NAMES.OPEN);
  }
  e.stopPropagation();
})

function handleSubmit(){
  var $demoFormValues = $('.form-container input'),
    $additionalNotesValue = $('.order').val();

  $demoFormValues.each(function(item){
    var nameType = $(this).attr('name');
    formData[nameType] = $(this).val();
    $(this).val('');
  })
  formData['orders'] = $additionalNotesValue;
  console.log(formData);
  $submissionModal.find('.confirmation').removeClass('none');
  $('notes').val('');
  $('.form-container').addClass('none');
}

});
