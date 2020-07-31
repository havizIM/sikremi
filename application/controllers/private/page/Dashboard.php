<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

    function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        
        if(!$this->session->has_userdata('logged_in')){
            redirect('login');
        }
    }
    
	public function index()
	{
		$this->load->view('private/dashboard/'.strtolower($this->session->userdata('level')));
	}
}
