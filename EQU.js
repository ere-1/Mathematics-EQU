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
    let root = (-b + Math.sqrt(delta)) / (2 * a);
    let theSignZero = root;
    theSignNeg = a > 0 ? "Fi" : `R - {${root}}`;
    theSignPos = a > 0 ? `R - {${root}}` : "Fi";
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
  } else if (delta > 0) {
    let root1 = (-b + Math.sqrt(delta)) / (2 * a);
    let root2 = (-b - Math.sqrt(delta)) / (2 * a);
    let theSignZero = root1 + "," + root2;
    signOfFunction = "different real roots";
    theSignPos = a > 0 ? `R - [${root1}, ${root2}]` : `]${root1}, ${root2}[`;
    theSignNeg = a > 0 ? `]${root1}, ${root2}[` : `R - [${root1}, ${root2}]`;

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
  } else {
    let realPart = (-b / (2 * a)).toFixed(3);
    let imaginaryPart = (Math.sqrt(-delta) / (2 * a)).toFixed(3);
    let root1 = `${realPart} + ${imaginaryPart}i`;
    let root2 = `${realPart} - ${imaginaryPart}i`;
    let root = root1 + ", " + root2;


    signOfFunction = "different imagine roots";
    theSignNeg = a > 0 ? "Fi" : "R";
    theSignPos = a > 0 ? "R" : "Fi";
    theSignZero = "Fi";

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
  }
}

async function main() {
  let equ = await promptUser(`type the equetion number
       1 quadratic equation
       2 cubic equation 
       3 Equation of two variables 
       =>`);

  if (equ == "1") {
    let a = eval(await promptUser("enter a value: \n=>"));
    let b = eval(await promptUser("enter b value: \n=>"));
    let c = eval(await promptUser("enter c value: \n=>"));
    let theEquRoots = quadraticEquetion(a, b, c);
    console.log("Discriminant: " + theEquRoots.delta);

    if (theEquRoots.root !== undefined) {
      console.log("Root: " + theEquRoots.root);
    } else {
      console.log("Roots: " + theEquRoots.root1 + ", " + theEquRoots.root2);
    }

    console.log("Sign of the function: " + theEquRoots.signOfFunction);
    console.log("Function is positive for: " + theEquRoots.theSignPos);
    console.log("Function is negative for: " + theEquRoots.theSignNeg);
    console.log("Function is zero at: " + theEquRoots.theSignZero);
    console.log("Vertex / minimum value: " + theEquRoots.axle);
    console.log("Function graph link: " + theEquRoots.graphLink);
  }
}
main();
