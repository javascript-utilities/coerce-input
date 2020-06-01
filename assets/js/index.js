const text_input__callback = (event) => {
  const client_input = event.target.value;
  const coerced_value = Coerce(client_input);
  const client_text_output = document.getElementById('client__text--output');

  const output_list = [
    `typeof -> ${typeof coerced_value}`,
  ];

  switch (typeof coerced_value) {
    case "string":
      if (coerced_value.length === 0) {
        output_list.push('<empty string>');
      } else {
        output_list.push(`"${coerced_value.replace(/"/g, '\\"')}"`);
      }
      break;

    case "object":
      if (Array.isArray(coerced_value)) {
        output_list.push(`Array [ ${coerced_value} ]`);
      } else {
        if (Object.keys(coerced_value).length === 0) {
          output_list.push('Object {  }');
        } else {
          output_list.push('Object {');
          Object.entries(coerced_value).reduce((accumulator, [key, value], index, array) => {
            let entry = `  ${key}: ${value}`;
            if (index < array.length - 1) {
              entry += ',';
            }
            accumulator.push(entry);
            return accumulator;
          }, output_list);
          output_list.push('}');
        }
      }
      break;

    default:
      output_list.push(coerced_value);
  }

  console.log(coerced_value);
  client_text_output.innerText = output_list.join('\n');
};


window.addEventListener('load', () => {
  const client_text_input = document.getElementById('client__text--input');

  client_text_input.addEventListener('input', text_input__callback);

});
