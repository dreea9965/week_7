// Write a program that prompts the user for a domain name, looks up the IP address for the domain,
// and prints it out. Example:
//
// $ node dns_lookup.
// Domain name: yahoo.com
// IP Address: 98.139.183.24
// Trigger an error condition by providing an invalid domain. See that the error gets displayed.



var fs = require('fs');
var dns = require('dns');
var request = require('request');
var readline = require('readline');


var rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a file name...' , function(name) {
      var filename = name;
      console.log(name);
      rl.close();

      dns.lookup(name, function(err, ip) {
        if (err) {
          console.log('ERROR MESAGE:' + err.message);
          return;

        }

      console.log(ip);


      // request.get(name, function(err, response, html){
      //   if (err) {
      //     console.log(err.message);
      //     return;
      //   }
      //
      //   });
      });
});
