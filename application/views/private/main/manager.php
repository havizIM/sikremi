
<!doctype html>
<html class="fixed">
	<head>
		<meta charset="UTF-8">

		<title>Manager | SIKREMI</title>
		<meta name="keywords" content="HTML5 Admin Template" />
		<meta name="description" content="Porto Admin - Responsive HTML5 Template">
		<meta name="author" content="okler.net">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

		<link href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800|Shadows+Into+Light" rel="stylesheet" type="text/css">

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/bootstrap/css/bootstrap.css" />

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/font-awesome/css/font-awesome.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/magnific-popup/magnific-popup.css" />

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/select2/dist/css/select2.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/select2/dist/css/select2-bootstrap.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/bootstrap-datepicker/css/datepicker3.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/bootstrap-timepicker/css/bootstrap-timepicker.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/datatable/datatables.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/fullcalendar/fullcalendar.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/fullcalendar/fullcalendar.print.css" media="print" />
		
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/loaders/loaders.min.css" />
        <link rel="stylesheet" href="<?= base_url() ?>assets/private/vendor/toastr/build/toastr.min.css" />
		<link rel="stylesheet" type="text/css" href="<?= base_url() ?>assets/private/vendor/dropify/dist/css/dropify.min.css">

		<link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/theme.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/skins/default.css" />
		<link rel="stylesheet" href="<?= base_url() ?>assets/private/stylesheets/theme-custom.css">

		<script src="<?= base_url() ?>assets/private/vendor/modernizr/modernizr.js"></script>
	</head>
	<body>
		<section class="body">

			<!-- start: header -->
			<header class="header">
				<div class="logo-container">
					<a href="../" class="logo">
						<img src="<?= base_url() ?>assets/private/images/logo.png" height="35" alt="Porto Admin" />
					</a>
					<div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
						<i class="fa fa-bars" aria-label="Toggle sidebar"></i>
					</div>
				</div>
			
				<div class="header-right">
			
					<span class="separator"></span>
			
					<div id="userbox" class="userbox">
						<a href="#" data-toggle="dropdown">
							<figure class="profile-picture">
								<img src="<?= base_url() ?>assets/private/images/user-default.jpg" alt="Joseph Doe" class="img-circle" data-lock-picture="<?= base_url() ?>assets/private/images/!logged-user.jpg" />
							</figure>
							<div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@okler.com">
								<span class="name"><?= $this->session->userdata('nama_lengkap') ?></span>
								<span class="role"><?= $this->session->userdata('level') ?></span>
							</div>
			
							<i class="fa custom-caret"></i>
						</a>
			
						<div class="dropdown-menu">
							<ul class="list-unstyled">
								<li class="divider"></li>
								<li>
									<a id="setting-profile" href="javascript:void(0);"><i class="fa fa-user"></i> My Profile</a>
								</li>
								<li>
									<a id="setting-password" href="javascript:void(0);"><i class="fa fa-lock"></i> Change Password</a>
								</li>
								<li>
									<a class="logout" id="setting-logout" href="javascript:void(0);"><i class="fa fa-power-off"></i> Logout</a>
								</li>
							</ul>
						</div>
					</div>
                </div>
                
			</header>
			<!-- end: header -->

			<div class="inner-wrapper">
				<aside id="sidebar-left" class="sidebar-left">
					<div class="sidebar-header">
						<div class="sidebar-title">
							Navigation
						</div>
						<div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
							<i class="fa fa-bars" aria-label="Toggle sidebar"></i>
						</div>
					</div>
				
					<div class="nano">
						<div class="nano-content">
							<nav id="menu" class="nav-main" role="navigation">
								<ul class="nav nav-main">
									<li>
										<a href="#/dashboard">
											<i class="fa fa-home" aria-hidden="true"></i>
											<span>Dashboard</span>
										</a>
									</li>
									
									<li>
										<a href="#/aplikasi">
											<i class="fa fa-file-o" aria-hidden="true"></i>
											<span>Aplikasi</span>
										</a>
									</li>
									<li>
										<a href="#/verifikasi">
											<i class="fa fa-search" aria-hidden="true"></i>
											<span>Verifikasi</span>
										</a>
									</li>
									<li>
										<a href="#/survey">
											<i class="fa fa-file" aria-hidden="true"></i>
											<span>Survey</span>
										</a>
									</li>
									<li>
										<a href="#/approval">
											<i class="fa fa-check" aria-hidden="true"></i>
											<span>Approval</span>
										</a>
									</li>
									<li>
										<a href="#/ditolak">
											<i class="fa fa-times" aria-hidden="true"></i>
											<span>Ditolak</span>
										</a>
									</li>
									<li>
										<a href="#/laporan">
											<i class="fa fa-list" aria-hidden="true"></i>
											<span>Laporan</span>
										</a>
									</li>
								</ul>
							</nav>
				
							
						</div>
				
					</div>
				</aside>

				<section role="main" id="app_content" class="content-body">
					
				</section>

				<form class="form_password">
					<div class="modal" id="modal_password" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
									<h4 class="modal-title" id="myModalLabel">Ganti Password</h4>
								</div>
								<div class="modal-body">
									<div class="form-group">
										<label for="nama_lengkap">Password Lama</label>
										<input type="password" id="old_password" name="old_password" class="form-control">
									</div>
									<div class="form-group">
										<label for="username">Password Baru</label>
										<input type="password" id="new_password" name="new_password" class="form-control">
									</div>
									<div class="form-group">
										<label for="telepon">Ulangi Password</label>
										<input type="password" id="retype_password" name="retype_password" class="form-control">
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
									<button type="submit" class="btn btn-primary">Simpan</button>
								</div>
							</div>
						</div>
					</div>
				</form>

				<div class="modal" id="modal_profile" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
								<h4 class="modal-title" id="myModalLabel">Profile</h4>
							</div>
							<div class="modal-body" id="profile_container">
								<h4 class="text-center">Loading...</h4>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>

		<script src="<?= base_url() ?>assets/private/vendor/jquery/jquery.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/jquery-browser-mobile/jquery.browser.mobile.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/jquery-ui/js/jquery-ui-1.10.4.custom.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap/js/bootstrap.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/nanoscroller/nanoscroller.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap-timepicker/js/bootstrap-timepicker.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/magnific-popup/magnific-popup.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/jquery-placeholder/jquery.placeholder.js"></script>
		
		<script src="<?= base_url() ?>assets/private/vendor/select2/dist/js/select2.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/datatable/datatables.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/chart.js/chart.min.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/printarea/jquery.PrintArea.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/fullcalendar/lib/moment.min.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/fullcalendar/fullcalendar.js"></script>

		<script src="<?= base_url() ?>assets/private/vendor/jquery-validation/jquery.validate.js"></script>
        <script src="<?= base_url() ?>assets/private/vendor/block-ui/jquery.blockUI.js"></script>
        <script src="<?= base_url() ?>assets/private/vendor/toastr/build/toastr.min.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/dropify/dist/js/dropify.min.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap-confirmation/bootstrap-confirmation.js"></script>
		<script src="<?= base_url() ?>assets/private/vendor/bootstrap-wizard/jquery.bootstrap.wizard.js"></script>
		
		<script src="<?= base_url() ?>assets/private/javascripts/theme.js"></script>
		<script src="<?= base_url() ?>assets/private/javascripts/theme.custom.js"></script>
		<script src="<?= base_url() ?>assets/private/javascripts/theme.init.js"></script>

        <script src="<?= base_url() ?>src/setting.js"></script>
		<script src="<?= base_url() ?>src/private/app.js"></script>
		<script>
			document.addEventListener('DOMContentLoaded', function () {
				mainController.init(<?= json_encode($this->session->userdata()) ?>)
			})
		</script>

	</body>
</html>