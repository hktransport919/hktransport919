# hktransport919

Replace index.html with index.php to make form work.
Add php code inside form to make to redirect to form page with message.
<?php
if($_GET['success']== 1){
    echo "<div>
                  <h2>
                      <em>Thanks</em> for contacting us!
                      We will get back to you soon!
                  </h2>
              </div>";
}
if($_GET['success']== -1){
    echo "<div>
                  <h2>
                      <em>Ooops!</em> Something went wrong!
                  </h2>
              </div>";
}
?>