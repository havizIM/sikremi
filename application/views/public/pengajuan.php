
<section class="page-header page-header-modern page-header-background page-header-background-sm overlay overlay-color-primary overlay-show overlay-op-8 mb-5" style="background-image: url(img/page-header/page-header-elements.jpg);">
    <div class="container">
        <div class="row">
            <div class="col-md-12 align-self-center p-static order-2 text-center">
                <h1>PENGAJUAN</h1>

            </div>
            <div class="col-md-12 align-self-center order-1">
                <ul class="breadcrumb breadcrumb-light d-block text-center">
                    <li><a href="#/home">Beranda</a></li>
                    <li class="active">Pengajuan</li>
                </ul>
            </div>
        </div>
    </div>
</section>

<div class="container py-2">

    <form id="form_add">
        <div class="row">
            <div class="col-md-12">
                <div class="overflow-hidden mb-1">
                    <h2 class="font-weight-normal text-7 mb-0"><strong class="font-weight-extra-bold">Simulasi</strong></h2>
                </div>
                <div class="overflow-hidden mb-4 pb-3">
                    <p class="mb-0">Lakukan simulasi perhitungan pinjaman anda di bawah.</p>
                </div>

                <div class="row">
                    <div class="col-lg-12 order-1 order-lg-2" id="form_simulasi">
                
                        <div class="featured-box featured-box-primary text-left mt-0">
                            <div class="box-content">
                                <div class="form-row">
                                    <div class="form-group col">
                                        <label class="font-weight-bold text-dark text-2">Angunan</label>
                                        <select class="form-control form-control-lg" id="angunan" name="angunan" required>
                                            <option value="">-- Pilih --</option>
                                            <option value="BPKB Motor">BPKB Motor</option>
                                            <option value="BPKB Mobil">BPKB Mobil</option>
                                            <option value="Surat Rumah">Surat Rumah</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col">
                                        <label class="font-weight-bold text-dark text-2">Nominal</label>
                                        <select class="form-control form-control-lg" id="nominal" name="limit_kredit" disabled required>
                                            <option value="">-- Pilih --</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col">
                                        <label class="font-weight-bold text-dark text-2">Jangka Waktu</label>
                                        <select class="form-control form-control-lg" id="jangka_waktu" name="jangka_waktu" required disabled>
                                            <option value="">-- Pilih --</option>
                                        </select>

                                        <input type="hidden" id="angsuran" name="angsuran">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col text-right">
                                        <button class="btn btn-info btn-md" id="btn_hitung" type="button">Hitung</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4 order-1 order-lg-2" id="detail_simulasi" style="display: none;">
                        
                        <div class="featured-box featured-box-primary text-left mt-0">
                            <div class="box-content">
                                <div class="overflow-hidden mb-1">
                                    <h4 class="font-weight-normal mb-0"><strong class="font-weight-extra-bold">Detail Pinjaman</strong></h4>
                                </div>

                                <div class="text-center" id="load_detail">
                                    Loading...
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="col-md-12" id="form_container" style="display: none;">
                <div class="overflow-hidden mb-1">
                    <h2 class="font-weight-normal text-7 mb-0"><strong class="font-weight-extra-bold">Pengajuan Aplikasi</strong></h2>
                </div>
                <div class="overflow-hidden mb-4 pb-3">
                    <p class="mb-0">Isi data anda dengan lengkap pada form di bawah.</p>
                </div>

                    <div class="accordion accordion-modern" id="accordion">
                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#pemohon">
                                        Data Pemohon
                                    </a>
                                </h4>
                            </div>
                            <div id="pemohon" class="collapse show">
                                <div class="card-body">

                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Nama Lengkap</label>
                                            <input type="text" required name="pemohon_nama_lengkap" id="pemohon_nama_lengkap" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Email</label>
                                            <input type="email" required name="email" id="email" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Tempat Lahir</label>
                                            <input type="text" required name="pemohon_tempat_lahir" id="pemohon_tempat_lahir" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Tanggal Lahir</label>
                                            <input type="date" required name="pemohon_tgl_lahir" id="pemohon_tgl_lahir" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Pendidikan Terakhir</label>
                                            <select class="form-control" id="pemohon_pendidikan_terakhir" name="pemohon_pendidikan_terakhir" required>
                                                <option value="">-- Pilih --</option>
                                                <option value="Tidak Tamat SD">Tidak Tamat SD</option>
                                                <option value="SD">SD</option>
                                                <option value="SMP">SMP</option>
                                                <option value="SMA">SMA</option>
                                                <option value="Diploma">Diploma</option>
                                                <option value="Sarjana">Sarjana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Telepon</label>
                                            <input type="text" name="pemohon_telepon" id="pemohon_telepon" required class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Alamat</label>
                                            <textarea required name="pemohon_alamat" id="pemohon_alamat" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Kecamatan</label>
                                            <input type="text" required name="pemohon_kecamatan" id="pemohon_kecamatan" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Kota</label>
                                            <input type="text" required name="pemohon_kota" id="pemohon_kota" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Provinsi</label>
                                            <input type="text" required name="pemohon_provinsi" id="pemohon_provinsi" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Kode Pos</label>
                                            <input type="text" required name="pemohon_kode_pos" id="pemohon_kode_pos" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">No KTP</label>
                                            <input type="text" required name="pemohon_no_ktp" id="pemohon_no_ktp" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">No NPWP</label>
                                            <input type="text" required name="pemohon_no_npwp" id="pemohon_no_npwp" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Status Tempat Tinggal</label>
                                            <select class="form-control" id="pemohon_status_tempat_tinggal" name="pemohon_status_tempat_tinggal" required>
                                                <option value="">-- Pilih --</option>
                                                <option value="Milik Sendiri">Milik Sendiri</option>
                                                <option value="Sewa/Kontrak">Sewa/Kontrak</option>
                                                <option value="Milik Keluarga">Milik Keluarga</option>
                                                <option value="Rumah Dinas">Rumah Dinas</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Lama Tinggal</label>
                                            <select class="form-control" id="pemohon_lama_tinggal" name="pemohon_lama_tinggal" required>
                                                <option value="">-- Pilih --</option>
                                                <option value="<2 tahun">&lt;2 tahun</option>
                                                <option value=">2 <5 tahun">&gt;2 &lt;5 tahun</option>
                                                <option value=">5 tahun">&gt;5 tahun</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Status</label>
                                            <select class="form-control" id="pemohon_status" name="pemohon_status" required>
                                                <option value="">-- Pilih --</option>
                                                <option value="Menikah">Menikah</option>
                                                <option value="Tidak Menikah">Tidak Menikah</option>
                                                <option value="Janda/Duda">Janda/Duda</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Jumlah Tanggungan</label>
                                            <input type="number" class="form-control" required name="pemohon_jml_tanggungan" id="pemohon_jml_tanggungan">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">No KK</label>
                                            <input type="text" name="pemohon_no_kk" id="pemohon_no_kk" required class="form-control">
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#pasangan">
                                        Pasangan
                                    </a>
                                </h4>
                            </div>
                            <div id="pasangan" class="collapse show">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Nama Lengkap</label>
                                            <input type="text" name="pasangan_nama_lengkap" id="pasangan_nama_lengkap" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Tempat Lahir</label>
                                            <input type="text" name="pasangan_tempat_lahir" id="pasangan_tempat_lahir" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Tanggal Lahir</label>
                                            <input type="date" name="pasangan_tgl_lahir" id="pasangan_tgl_lahir" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Pendidikan Terakhir</label>
                                            <select class="form-control" id="pasangan_pendidikan_terakhir" name="pasangan_pendidikan_terakhir">
                                                <option value="">-- Pilih --</option>
                                                <option value="Tidak Tamat SD">Tidak Tamat SD</option>
                                                <option value="SD">SD</option>
                                                <option value="SMP">SMP</option>
                                                <option value="SMA">SMA</option>
                                                <option value="Diploma">Diploma</option>
                                                <option value="Sarjana">Sarjana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">No KTP</label>
                                            <input type="text" name="pasangan_no_ktp" id="pasangan_no_ktp" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Pekerjaan</label>
                                            <input type="text" name="pasangan_pekerjaan" id="pasangan_pekerjaan" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Penghasilan</label>
                                            <input type="text" name="pasangan_penghasilan" id="pasangan_penghasilan" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#usaha">
                                        Usaha
                                    </a>
                                </h4>
                            </div>
                            <div id="usaha" class="collapse show">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Berusaha Sejak</label>
                                            <input type="date" required name="usaha_berusaha_sejak" id="usaha_berusaha_sejak" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Bidang Usaha</label>
                                            <input type="text" required name="usaha_bidang_usaha" id="usaha_bidang_usaha" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Jumlah karyawan</label>
                                            <input type="number" required name="usaha_jml_karyawan" id="usaha_jml_karyawan" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Alamat</label>
                                            <textarea required name="usaha_alamat" id="usaha_alamat" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Telepon</label>
                                            <input type="text" required name="usaha_telepon" id="usaha_telepon" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Status Kepemilikan</label>
                                            <select class="form-control" id="usaha_status_kepemilikan" name="usaha_status_kepemilikan">
                                                <option value="">-- Pilih --</option>
                                                <option value="Milik Sendiri">Milik Sendiri</option>
                                                <option value="Sewa/Kontrak">Sewa/Kontrak</option>
                                                <option value="Milik Keluarga">Milik Keluarga</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#kerabat">
                                        Kerabat
                                    </a>
                                </h4>
                            </div>
                            <div id="kerabat" class="collapse show">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Nama Lengkap</label>
                                            <input type="text" required name="kerabat_nama_lengkap" id="kerabat_nama_lengkap" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Hubungan</label>
                                            <input type="text" required name="kerabat_hubungan" id="kerabat_hubungan" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Alamat</label>
                                            <textarea required name="kerabat_alamat" id="kerabat_alamat" class="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Kota</label>
                                            <input type="text" required name="kerabat_kota" id="kerabat_kota" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Jenis Kelamin</label>
                                            <select class="form-control" id="kerabat_jenis_kelamin" name="kerabat_jenis_kelamin">
                                                <option value="">-- Pilih --</option>
                                                <option value="L">Laki-laki</option>
                                                <option value="P">Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Telepon</label>
                                            <input type="text" required name="kerabat_telepon" id="kerabat_telepon" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#keuangan">
                                        Keuangan
                                    </a>
                                </h4>
                            </div>
                            <div id="keuangan" class="collapse show">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Penghasilan Perbulan</label>
                                            <input type="number" required name="keuangan_penghasilan_perbulan" id="keuangan_penghasilan_perbulan" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Penghasilan Lainnya</label>
                                            <input type="number" required name="keuangan_penghasilan_lainnya" id="keuangan_penghasilan_lainnya" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Biaya</label>
                                            <input type="number" required name="keuangan_biaya" id="keuangan_biaya" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label class="font-weight-bold text-dark text-2">Keuntungan</label>
                                            <input type="number" required name="keuangan_keuntungan" id="keuangan_keuntungan" class="form-control">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-lg-4">
                                            <label class="font-weight-bold text-dark text-2">Total Pinjaman Lain</label>
                                            <input type="number" required name="keuangan_total_pinjaman_lain" id="keuangan_total_pinjaman_lain" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label class="font-weight-bold text-dark text-2">Angsuran Pinjaman Lain</label>
                                            <input type="number" required name="keuangan_angsuran_pinjaman_lain" id="keuangan_angsuran_pinjaman_lain" class="form-control">
                                        </div>
                                        <div class="form-group col-lg-4">
                                            <label class="font-weight-bold text-dark text-2">Sisa Waktu Angsuran</label>
                                            <input type="number" required name="keuangan_sisa_waktu_angsuran" id="keuangan_sisa_waktu_angsuran" class="form-control">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card card-default">
                            <div class="card-header">
                                <h4 class="card-title m-0">
                                    <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#lampiran">
                                        Lampiran
                                    </a>
                                </h4>
                            </div>
                            <div id="lampiran" class="collapse show">
                                <div class="card-body">
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Foto KTP</label>
                                            <input type="file" required name="lampiran_file[0]" id="lampiran_file_0" class="dropify">
                                            <input type="hidden" name="lampiran_keterangan[0]" id="lampiran_keterangan_0" value="Foto KTP">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Foto KK</label>
                                            <input type="file" required name="lampiran_file[1]" id="lampiran_file_1" class="dropify">
                                            <input type="hidden" name="lampiran_keterangan[1]" id="lampiran_keterangan_1" value="Foto KK">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Foto NPWP</label>
                                            <input type="file" required name="lampiran_file[2]" id="lampiran_file_2" class="dropify">
                                            <input type="hidden" name="lampiran_keterangan[2]" id="lampiran_keterangan_2" value="Foto NPWP">
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col">
                                            <label class="font-weight-bold text-dark text-2">Pas Photo</label>
                                            <input type="file" required name="lampiran_file[3]" id="lampiran_file_3" class="dropify">
                                            <input type="hidden" name="lampiran_keterangan[3]" id="lampiran_keterangan_3" value="Pas Photo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group row mt-5">
                        <div class="form-group col-lg-9">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="terms" name="terms" required>
                                <label class="custom-control-label text-2" for="terms">Saya telah membaca dan menyetujui <a href="javascript:void(0);">Syarat dan Ketentuan</a></label>
                            </div>
                        </div>

                        <div class="form-group col-lg-3">
                            <button type="submit" class="btn btn-primary btn-modern float-right" id="btn_submit" data-loading-text="Loading...">Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    </form>

</div>

<script type="module">
    import pengajuanController from '<?= base_url() ?>src/public/modules/pengajuan.js';
    pengajuanController.init()
</script>
