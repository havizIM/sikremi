<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Verifikasi extends CI_Controller {

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
		$this->load->view('private/verifikasi/data');
    }

    public function detail($id)
	{
        $data['id'] = $id;
		$this->load->view('private/verifikasi/detail', $data);
    }
}
