//<!-- File for appending Intern team members to a team profile page-->

const appendIntern = (data) =>
`
                <div class="col s12 m6 l4">
                    <div class="card cyan darken-2">
                        <div class="card-content white-text myCSSpadding">
                            <span class="card-title">${data.name}</span>
                            <span class="card-title"><i class="material-icons left">assignment_ind</i>Intern</span>
                        </div>
                        <div class="card-action white-text cyan">
                            <div class="row myCSSmargin">
                                <p>ID: ${data.id}</p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>Email: <a class="waves-effect cyan-text text-darken-4" href="mailto:${data.email}">${data.email}</a></p>
                            </div>
                            <div class="row myCSSmargin">
                                <p>School: ${data.school}</p>
                            </div>
                        </div>
                    </div>
                </div>`

module.exports = appendIntern