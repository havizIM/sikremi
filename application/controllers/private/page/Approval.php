<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Approval extends CI_Controller {

    function __construct()
    {
		parent::__construct();
        $this->load->library('session');
        
        if(!$this->session->has_userdata('logged_in')){
            redirect('unauthenticated');
        }

    }
    
	public function index()
	{
		$this->load->view('private/approval/data');
    }

	public function detail($id)
	{
        $data['id'] = $id;
		$this->load->view('private/approval/detail', $data);
    }
}
