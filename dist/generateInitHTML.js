// creating function for generating initial HTML with Manager info only

const generateInitHTML = (data) => 
`<!doctype html>
<html lang="en">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Compiled and minified CSS -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Calling my CSS code -->
        <link rel="stylesheet" href="../CSS/style.css"/>
        <title>Team Profile Generator</title>
    <!-- </head> -->
    <body>
        <!-- Header info -->
        <header class="card-panel cyan darken-4">
            <h4 class="white-text flow-text center-align">My Team</h4>
        </header>
        <!-- Creating Main content -->
        <main class="container">
            <article> 
            <div class="row" id="infoCards">
                <div class="col s12 m6 l4">
                    <div class="card cyan darken-2">
                        <div class="card-content white-text myCSSpadding">
                          <span class="card-title">${data.name}</span>
                          <span class="card-title"><i class="material-icons left">golf_course</i>Manager</span>
                        </div>
                        <div class="card-action white-text cyan">
                            <div class="row myCSSmargin">
                                <p>ID: ${data.id}</p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>Email: <a href="mailto:${data.email}">${data.email}</a></p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>Office number:  ${data.officeNumber}</p>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
            </article>
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <!-- Calling my JS code for appending Engineer or Intern information -->
    <script src="./dist/appendEngineer.js"></script>;
    <script src="./dist/appendInter.js"></script>;

  </body>
</html>`;

module.exports = generateInitHTML;