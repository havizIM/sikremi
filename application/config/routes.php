<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/



$route['default_controller'] = 'public/Main';



$route['page/home'] = 'public/page/Home';
$route['page/pengajuan'] = 'public/page/Pengajuan';
$route['page/cek_pengajuan'] = 'public/page/CekPengajuan';
$route['page/tentang'] = 'public/page/Tentang';

$route['administrator/login'] = 'private/Auth/login';
$route['authenticate'] = 'private/Authorization/authenticate';
$route['logout'] = 'private/Authorization/logout';

$route['administrator'] = 'private/Main/index';
$route['administrator/page/dashboard'] = 'private/page/Dashboard/index';

$route['administrator/page/aplikasi'] = 'private/page/Aplikasi/index';
$route['administrator/page/aplikasi/(:num)'] = 'private/page/Aplikasi/detail/$1';

$route['administrator/page/verifikasi'] = 'private/page/Verifikasi/index';
$route['administrator/page/verifikasi/(:num)'] = 'private/page/Verifikasi/detail/$1';

$route['administrator/page/survey'] = 'private/page/Survey/index';
$route['administrator/page/survey/(:num)'] = 'private/page/Survey/detail/$1';

$route['administrator/page/approval'] = 'private/page/Approval/index';
$route['administrator/page/approval/(:num)'] = 'private/page/Approval/detail/$1';


$route['administrator/page/ditolak'] = 'private/page/Ditolak/index';
$route['administrator/page/user'] = 'private/page/User/index';
$route['administrator/page/laporan'] = 'private/page/Laporan/index';

$route['administrator/page/user'] = 'private/page/User/index';
$route['administrator/page/kredit'] = 'private/page/Kredit/index';

$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
