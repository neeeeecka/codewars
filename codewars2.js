var calc = function (expression) {
   expression = expression.replace(/ /g, "");
   expression = expression.replace("-", "-1*");
   var actions = { parent: null, self: [] };

   expression = expression + "N";
   console.log(expression);

   var numberStr = "";

   var subBrackets = actions;

   for (var i = 0; i < expression.length; i++) {
      var symbol = expression[i];
      if (symbol == "(") {
         subBrackets.self.push({ parent: subBrackets, self: [] });
         subBrackets = subBrackets.self[subBrackets.self.length - 1];
      }

      if ("0123456789.-".includes(symbol)) {
         numberStr += symbol;
      } else {
         //first add number after encountering other symbol
         if (numberStr.length > 0) {
            if (subBrackets) {
               subBrackets.self.push(+numberStr);
            } else {
               actions.push(+numberStr);
            }
            numberStr = "";
         }
         //next do symbol checks

         if ("*/+-".includes(symbol)) {
            if (subBrackets) {
               subBrackets.self.push(symbol);
            } else {
               actions.push([symbol]);
            }
         }

         if (symbol == ")") {
            subBrackets = subBrackets.parent;
         }
      }
   }
   console.log(actions);

   evaluate(actions);
};
const operations = {
   "+": (a, b) => a + b,
   "-": (a, b) => a - b,
   "*": (a, b) => a * b,
   "/": (a, b) => a / b,
};
const evaluate = (obj) => {
   var sum = 0;
   const expression = obj.self;

   for (let i = 0; i < expression.length; i++) {
      let a = expression[i];

      if (a.self) {
         a = evaluate(a);
      }
      if (!isNaN(a)) {
         let o = expression[i - 1];
         o = o ? o : "+";
         sum = operations[o](sum, a);
      }
   }
   console.log(sum);
   return sum;
};
// calc("2 / (2 + ((3 + 1) * 3) + (1.5 * 5)) * (3-2) * 4.6 + 5 - 2");
calc("1--1");
