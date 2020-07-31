
<!doctype html>
<html class="fixed">
	<head>

		<!-- Basic -->
		<meta charset="UTF-8">

		<meta name="keywords" content="HTML5 Admin Template" />
		<meta name="description" content="Porto Admin - Responsive HTML5 Template">
		<meta name="author" content="okler.net">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Login | SIKREMI</title>
        
		<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/bootstrap/css/bootstrap.css" />

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/font-awesome/css/font-awesome.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/magnific-popup/magnific-popup.css" />

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/theme.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/skins/default.css" />
        <link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/theme-custom.css">
        
        <link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/loaders/loaders.min.css" />
        <link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/toastr/build/toastr.min.css" />

		<script src="<?= base_url() ?>assets/private/vendor/modernizr/modernizr.js"></script>
	</head>
	<body>
		<!-- start: page -->
		<section class="body-sign">
			<div class="center-sign">
				<a href="javascript:void(0)" class="logo pull-left">
					<img src="<?= base_url() ?>assets/private/images/logo.png" height="54" alt="Porto Admin" />
				</a>

				<div class="panel panel-sign">
					<div class="panel-title-sign mt-xl text-right">
						<h2 class="title text-uppercase text-weight-bold m-none"><i class="fa fa-user mr-xs"></i> SI - KREMI</h2>
					</div>
					<div class="panel-body" id="container_login">
						<form id="form_login">
							<div class="form-group mb-lg">
								<label>Username</label>
								<div class="input-group input-group-icon">
									<input name="username" id="username" type="text" class="form-control input-lg" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-user"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="form-group mb-lg">
								<div class="clearfix">
									<label class="pull-left">Password</label>
								</div>
								<div class="input-group input-group-icon">
									<input name="password" type="password" id="password" class="form-control input-lg" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-lock"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-8">
									<div class="checkbox-custom checkbox-default">
										<input id="show_password" name="rememberme" type="checkbox"/>
										<label for="RememberMe">Show Password</label>
									</div>
								</div>
								<div class="col-sm-4 text-right">
									<button type="submit" class="btn btn-primary hidden-xs">Login</button>
								</div>
							</div>
						</form>
					</div>
				</div>

				<p class="text-center text-muted mt-md mb-md">&copy; Made With <i class="fa fa-heart text-danger"></i> by Muhammad Rizky.</p>
			</div>
		</section>
		<!-- end: page -->

		<!-- Vendor -->
		<script src="<?= base_url() ?>assets/private/vendor/jquery/jquery.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap/js/bootstrap.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/nanoscroller/nanoscroller.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/magnific-popup/magnific-popup.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/jquery-placeholder/jquery.placeholder.js"></script>
		
		<script src="<?= base_url() ?>assets/private/javascripts/theme.js"></script>
		<script src="<?= base_url() ?>assets/private/javascripts/theme.custom.js"></script>
        <script src="<?= base_url() ?>assets/private/javascripts/theme.init.js"></script>
        
        <script src="<?= base_url() ?>assets/private/vendor/jquery-validation/jquery.validate.js"></script>
        <script src="<?= base_url() ?>assets/private/vendor/block-ui/jquery.blockUI.js"></script>
        <script src="<?= base_url() ?>assets/private/vendor/toastr/build/toastr.min.js"></script>

        <script src="<?= base_url() ?>src/setting.js"></script>
        <script src="<?= base_url() ?>src/private/auth.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                authController.init()
            })
        </script>


	</body>
</html>