<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Auth extends CI_Controller {

	function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        
		if($this->session->has_userdata('logged_in') ){
			redirect('administrator/');
		}
	}

	public function login()
	{
		$this->load->view('auth/login');
	}
}
