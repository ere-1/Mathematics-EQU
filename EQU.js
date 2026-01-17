const readline = require("readline");

// i will arrange my ideas here
// 1 quadratic equation
/**
 get delta done
 the function is real or imagin roots done
 get roots done
 get the greatest number done
 smallest number  done 
 get graph of functions process
 get the sign of function done
 */
// 2 cubic equation
// 3 Equation of two variables
// get all identify tringometry

function promptUser(question) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}
function quadraticEquetion(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  let signOfFunction = "same real roots";
  let x = -b / (2 * a);
  let y = a * x ** 2 + b * x + c;
  let axle = a > 0 ? `the smalest value is ${y}` : `the greatest value is ${y}`;
  let theSignNeg, theSignPos;
  let expr = encodeURIComponent(
    `${a}x^2${b >= 0 ? `+${b}x` : `${b}x`} ${c >= 0 ? `+${c}` : `${c}`}`,
  );
  let graphLink = `https://www.geogebra.org/graphing?command=${expr}`;

  if (delta == 0) {
    let root = (-b + delta ** 0.5) / (2 * a);
    let theSignZero = root;
    theSignNeg = a > 0 ? "Fi" : `R - [${root}]`;
    theSignPos = a > 0 ? `R - [${root}]` : "Fi";
    return {
      delta,
      root,
      signOfFunction,
      theSignPos,
      theSignNeg,
      theSignZero,
      axle,
      graphLink,
    };
  } else {
    let root1 = (-b + delta ** 0.5) / (2 * a);
    let root2 = (-b - delta ** 0.5) / (2 * a);
    let theSignZero = root1 + "," + root2;
    if (delta > 0) {
      signOfFunction = "different real roots";
      theSignPos = a > 0 ? `R - [${root1}, ${root2}]` : `]${root1}, ${root2}[`;
      theSignNeg = a > 0 ? `]${root1}, ${root2}[` : `R - [${root1}, ${root2}]`;
    } else {
      signOfFunction = "different imagine roots";
      theSignNeg = a > 0 ? "Fi" : "R";
      theSignPos = a > 0 ? "R" : "Fi";
      theSignZero = "Fi";
    }
    return {
      delta,
      root1,
      root2,
      signOfFunction,
      theSignPos,
      theSignNeg,
      theSignZero,
      axle,
      graphLink,
    };
  }
}

async function main() {
  let equ = await promptUser(`type the equetion number
       1 quadratic equation
       2 cubic equation 
       3 Equation of two variables 
       =>`);

  if (equ == "1") {
    let a = Number(await promptUser("enter a value: \n=>"));
    let b = Number(await promptUser("enter b value: \n=>"));
    let c = Number(await promptUser("enter c value: \n=>"));
    let theEquRoots = quadraticEquetion(a, b, c);
    if (theEquRoots.length == 8) {
      console.log("the Discriminant " + theEquRoots.delta);
      console.log("Root is " + theEquRoots.root);
      console.log("the Sign of Function is " + theEquRoots.signOfFunction);
      console.log("function sign is positive when its " + theEquRoots.theSignPos);
      console.log("function sign is negative when its " + theEquRoots.theSignNeg);
      console.log("function sign is zero when its " + theEquRoots.theSignZero);
      console.log("function axle " + theEquRoots.axle);
      console.log("function graph link is " + theEquRoots.graphLink);
    } else {
      console.log("the Discriminant " + theEquRoots.delta);
      console.log("Roots is " + theEquRoots.root1 + "," + theEquRoots.root2);
      console.log("the Sign of Function is " + theEquRoots.signOfFunction);
      console.log("function sign is positive when its " + theEquRoots.theSignPos);
      console.log("function sign is negative when its " + theEquRoots.theSignNeg);
      console.log("function sign is zero when its " + theEquRoots.theSignZero);
      console.log("function axle " + theEquRoots.axle);
      console.log("function graph link is " + theEquRoots.graphLink);
    }
  }
}
main();
