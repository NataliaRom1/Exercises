/**
 * 
 * @typedef Replace
 * 
 * @property {string} from
 * @property {string} to
 */

/**
 * 
 * @param {string} message 
 * @param {Replace[]} replaces 
 * @returns {string}
 */

 function decode(message, replaces) {
    for (let i = 0; i < message.length; i++) {
      for (let j = 0; j < replaces.length; j++) {
        if (message[i] == replaces[j].from) { 
          message[i] = replaces[j].to;
        }
      }
       
    }
  
    return message;
  }
   
  //  module.exports = { decode };

   console.log(decode('Aa', [{ from: 'a', to: 'b' }])) //=== 'Ab'