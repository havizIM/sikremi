<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CekPengajuan extends CI_Controller {
	public function index()
	{
		$this->load->view('public/cek_pengajuan');
	}
}
