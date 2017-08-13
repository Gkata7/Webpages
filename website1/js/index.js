$(document).ready(function(){
  var $documentBody = $('body'),
    $submissionModal = $('.demo-submission-modal'),
    CLASS_NAMES = {
      OPEN: 'open',
      BTN_INFO: 'btn-info',
      SUBMISSION_MODAL: 'demo-submission-modal',
      SUBMIT_FORM_BUTTON: 'submit-form-button'
  }

$documentBody.click(function(e){
  e.preventDefault();
  var $el = $(e.target),
    hasDemoRequestClass = $el.hasClass(CLASS_NAMES.BTN_INFO);
    isDemoSubmissionModal = $el.parents('.demo-submission-modal').length || $el.hasClass(CLASS_NAMES.SUBMISSION_MODAL),
    isSubmitFormButton = $el.hasClass(CLASS_NAMES.SUBMIT_FORM_BUTTON),
    formData = {};

  if(hasDemoRequestClass){
    $('.confirmation').addClass('none');
    $('.demo-form-container').removeClass('none');
    $submissionModal.addClass(CLASS_NAMES.OPEN);
  }else if(isSubmitFormButton){
    handleSubmit()
  }else if(!isDemoSubmissionModal){
    $submissionModal.removeClass(CLASS_NAMES.OPEN);
  }
  e.stopPropagation();
})

function handleSubmit(){
  var $demoFormValues = $('.demo-form-container input'),
    $additionalNotesValue = $('.notes').val();

  $demoFormValues.each(function(item){
    var nameType = $(this).attr('name');
    formData[nameType] = $(this).val();
    $(this).val('');
  })
  formData['additionalNotes'] = $additionalNotesValue;
  console.log(formData);
  $submissionModal.find('.confirmation').removeClass('none');
  $('notes').val('');
  $('.demo-form-container').addClass('none');
}

});
