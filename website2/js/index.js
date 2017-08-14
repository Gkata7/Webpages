// Page Ready. Hoisting selectors and class name objects for faster run time.
$(document).ready(function(){
  var $documentBody = $('body'),
    $submissionModal = $('.demo-submit'),
    CLASS_NAMES = {
      OPEN: 'open',
      REQUEST_BUTTON: 'request-button',
      SUBMISSION_MODAL: 'demo-submit',
      SUBMIT_FORM_BUTTON: 'submit-form-button'
    }
// Add Event Handlers that handles all the click events.

$documentBody.click(function(e){
  e.preventDefault();
  var $el = $(e.target),
    hasDemoRequestClass = $el.hasClass(CLASS_NAMES.REQUEST_BUTTON);
    isSubmissionModal = $el.parents('.demo-submit').length || $el.hasClass(CLASS_NAMES.SUBMISSION_MODAL),
    isSubmitFormButton = $el.hasClass(CLASS_NAMES.SUBMIT_FORM_BUTTON),
    formData = {};
// If clicked on Demo Button, open the submit form

  if(hasDemoRequestClass) {
    $('.confirmation').addClass('none');
    $('.demo-form-container').removeClass('none');
    $submissionModal.addClass(CLASS_NAMES.OPEN);
// If clicked oustide of submission modal, close it.
  }else if(isSubmitFormButton){
    handleSubmit()
  }else if(!isDemoSubmit){
    $submissionModal.removeClass(CLASS_NAMES.OPEN);
  }
  e.stopPropagation();
})
// Handles Submit functions
function handleSubmit(){
  var $demoFormValues = $('.demo-form-container'),
    $additionalNotesValue = $('.notes').val();

  $demoFormValues.each(function(item){
    var nameType = $(this).attr('name');
    formData[nameType] = $(this).val();
// clears all values
    $(this).val('');
  })
formData['additionalNotes'] = $additionalNotesValue;
console.log(formData);
$submissionModal.find('.confirmation').removeClass('none');
$('.notes').val('');
#('.demo-form-container').addClass('none');
}

});
