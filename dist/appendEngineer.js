//<!-- File for appending additional Engineer team members -->

const appendEngineer = (data) =>
`
                <div class="col s12 m6 l4">
                    <div class="card cyan darken-2">
                        <div class="myCSS card-content white-text myCSSpadding">
                            <span class="card-title">${data.name}</span>
                            <span class="card-title"><i class="material-icons left">memory</i>Engineer</span>
                        </div>
                        <div class="card-action white-text cyan">
                            <div class="row myCSSmargin">
                                <p>ID: ${data.id}</p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>Email: <a class="waves-effect cyan-text text-darken-4" href="mailto:${data.email}">${data.email}</a></p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>Github: <a class="waves-effect cyan-text text-darken-4" href="https://github.com/${data.gitHub}" target="blank">${data.gitHub}</a></p>
                            </div>
                        </div>
                    </div>
                </div>`

module.exports = appendEngineer