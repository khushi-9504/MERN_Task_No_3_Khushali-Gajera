document.addEventListener('DOMContentLoaded', () => {
  const formFields = document.getElementById('form-fields');
  const addFieldButton = document.getElementById('add-field');
  const form = document.getElementById('dynamic-form');

  // Add a new input field
  addFieldButton.addEventListener('click', () => {
      const fieldWrapper = document.createElement('div');
      fieldWrapper.classList.add('field-wrapper');

      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.name = 'field[]';
      inputField.placeholder = 'Enter value';

      const removeButton = document.createElement('button');
      removeButton.type = 'button';
      removeButton.classList.add('remove-field');
      removeButton.textContent = 'Remove';

      // Remove the field on click
      removeButton.addEventListener('click', () => {
          formFields.removeChild(fieldWrapper);
      });

      fieldWrapper.appendChild(inputField);
      fieldWrapper.appendChild(removeButton);
      formFields.appendChild(fieldWrapper);
  });

  // Handle form submission
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = formData.getAll('field[]');
      console.log('Form Data:', data);

      alert(`Form submitted with values: ${data.join(', ')}`);
  });
});
