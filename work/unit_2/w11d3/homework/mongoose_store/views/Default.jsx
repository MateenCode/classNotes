const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
            <head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="/styles.css"/>
            </head>
            <body>
                <header>
                <nav class="navbar navbar-expand-lg navbar-light bg-danger">
                            <a class="navbar-brand text-white" href="/products">GUCCI</a>
                           <ul class="nav justify-content-center"> 
                                <li class="nav-item">
                                    {/* <a href="/products"><h1 className="text-white">GUCCI</h1></a>  */}
                                </li>
                            </ul> 
                            <button class="navbar-toggler bg-transparent" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link text-white" href="/products">Home <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="/products/new">Add New Product</a>
                                </li>
                                </ul>
                            </div>
                            </nav>
                <img className="img-fluid" src="https://cdn1.thr.com/sites/default/files/2017/09/gu553_fw17_mens_tailoring_layout_dps_pr_crop-h_2017.jpg" alt=""/>
                </header>
            
                
                
                        {/* <h1>GUCCI</h1> */}
                        
                        {/* <nav className="navbar navbar-light bg-dark">
                        <a class="navbar-brand" href="#">GUCCI</a>
                            <a class="nav-link active text-white" href="/products">Home</a>
                            <a class="nav-link text-white" href="/products/new">Add new Product</a>
                        </nav>  */}
                         {/* <a href="/pokemon/new">Add New Pokemon</a> */}
                
                {this.props.children}
                <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

            </body>
        </html>

        )
        
    }
}

module.exports = Default;