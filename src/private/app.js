const appUI = ((SET) => {
    return {
        renderDetail: (data, USER) => {
            let status_color, no = 1;



            if (data.status === 'Proses') {
                status_color = '<div class="text-warning"><b>Proses</b></div>'
            } else if (data.status === 'Tolak') {
                status_color = '<div class="text-danger"><b>Ditolak</b></div>'
            } else {
                status_color = '<div class="text-success"><b>Diterima</b></div>'
            }

            let html = `
                <section>
                    <button class="btn btn-primary" style="float: right; width: 200px;" id="print"><i class="fa fa-print"></i> Print</button>
                </section>

               <div class="row">
                    <div class="col-md-12">
                        <div class="tabs">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#detail" data-toggle="tab">Aplikasi</a>
                                </li>
                                <li>
                                    <a href="#foto" data-toggle="tab">Lampiran</a>
                                </li>
                                <li>
                                    <a href="#log" data-toggle="tab">Logs</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="detail" class="tab-pane active">

                                    <div class="invoice printableArea">

                                        <div class="bill-info">
                                           
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 70%">
                                                        <div class="ib">
                                                            <img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
                                                            <p class="mt-5">Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA</p>
                                                        </div>
                                                    </td>
                                                    <td style="width: 30%">
                                                        <table style="width: 100%">
                                                            <tr>
                                                                <td colspan="3">
                                                                    <h3>Aplikasi Kredit Mikro</h3>
                                                                    <h4><b>No. ${data.no_aplikasi}</b></h4>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Angunan</td>
                                                                <td>:</td>
                                                                <td>${data.angunan}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Limit</td>
                                                                <td>:</td>
                                                                <td>Rp. ${SET.realCurrency(data.limit_kredit)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Jangka Waktu</td>
                                                                <td>:</td>
                                                                <td>${data.jangka_waktu} Bulan</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tgl Pengajuan</td>
                                                                <td>:</td>
                                                                <td>${data.tgl_aplikasi}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Status</td>
                                                                <td>:</td>
                                                                <td>${status_color}</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>

                                            <hr/>

                                            <h3>Pemohon</h3>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 30%">Nama Lengkap</td>
                                                    <td style="width: 5%">:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.nama_lengkap}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tempat / Tgl Lahir</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.tempat_lahir}, ${data.pemohon.tgl_lahir}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.alamat}, ${data.pemohon.kecamatan}, ${data.pemohon.kota}, ${data.pemohon.provinsi}, ${data.pemohon.kode_pos}</td>
                                                </tr>
                                                <tr>
                                                    <td>Lama Tinggal</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.lama_tinggal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status Tempat Tinggal</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.status_tempat_tinggal}</td>
                                                </tr>
                                                <tr>
                                                    <td>Pendidikan Terakhir</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.pendidikan_terakhir}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.status}</td>
                                                </tr>
                                                <tr>
                                                    <td>Jumlah Tanggungan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.jml_tanggungan}</td>
                                                </tr>
                                                <tr>
                                                    <td>Telepon</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.telepon}</td>
                                                </tr>
                                                <tr>
                                                    <td>No KTP</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.no_ktp}</td>
                                                </tr>
                                                <tr>
                                                    <td>No KK</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.no_kk}</td>
                                                </tr>
                                                <tr>
                                                    <td>NPWP</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pemohon.no_npwp}</td>
                                                </tr>
                                            </table>

                                            <hr/>

                                            
                                            <h3>Pasangan</h3>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 30%">Nama Lengkap</td>
                                                    <td style="width: 5%">:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.nama_lengkap)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Tempat / Tgl Lahir</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.tempat_lahir)}, ${SET.replaceNull(data.pasangan.tgl_lahir)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Pendidikan Terakhir</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.pendidikan_terakhir)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Pekerjaan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.pekerjaan)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Penghasilan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.pasangan.penghasilan === null ? '-' : `Rp. ${SET.realCurrency(data.pasangan.penghasilan)}`}</td>
                                                </tr>
                                                <tr>
                                                    <td>No KTP</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.pasangan.no_ktp)}</td>
                                                </tr>
                                            </table>

                                            <hr/>

                                            <h3>Kerabat</h3>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 30%">Nama Lengkap</td>
                                                    <td style="width: 5%">:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.nama_lengkap)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Hubungan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.hubungan)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alamat</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.alamat)}, ${data.kerabat.kota}</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenis Kelamin</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.kerabat.jenis_kelamin === 'P' ? 'Perempuan' : 'Laki-laki'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Telepon</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.kerabat.telepon)}</td>
                                                </tr>
                                            </table>

                                            <hr/>

                                            <h3>Usaha</h3>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 30%">Berusaha Sejak</td>
                                                    <td style="width: 5%">:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.berusaha_sejak)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Bidang Usaha</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.bidang_usaha)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Jumlah Karyawan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.jml_karyawan)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Status Kepemilikan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${data.usaha.status_kepemilikan}</td>
                                                </tr>
                                                <tr>
                                                    <td>Telepon</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.replaceNull(data.usaha.telepon)}</td>
                                                </tr>
                                            </table>

                                            <hr/>

                                            <h3>Keuangan</h3>
                                            <table style="width: 100%">
                                                <tr>
                                                    <td style="width: 30%">Penghasilan Perbulan</td>
                                                    <td style="width: 5%">:</td>
                                                    <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.penghasilan_perbulan)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Penghasilan Lainnya</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.penghasilan_lainnya)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Keuntungan</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.keuntungan)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Biaya</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.biaya)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Pinjaman Lain</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">Rp. ${SET.realCurrency(data.keuangan.total_pinjaman_lain)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sisa Waktu Angsuran</td>
                                                    <td>:</td>
                                                    <td style="border-bottom: 1px solid black">${SET.realCurrency(data.keuangan.sisa_waktu_angsuran)} Bulan</td>
                                                </tr>
                                            </table>
                                            
                                            <hr/>

                                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                                        </div>

                                        <br/>

                                        <table style="width: 100%">
                                            <tr>
                                                <td style="width: 50%" class="text-center">
                                                    <div>Nasabah</div>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <div>( ${data.pemohon.nama_lengkap} )</div>
                                                </td>
                                                <td  style="width: 50%" class="text-center">
                                                    ${data.approval !== null ? `
                                                        <div>Diapprove Oleh</div>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        <br/>
                                                        <div>( ${data.approval.user.nama_lengkap} )</div>
                                                    ` : ''}

                                                    ${data.keterangan !== null ? `
                                                        <div>Note :</div>
                                                        <div><b>
                                                            ${data.keterangan}
                                                        </b></div>
                                                    ` : ''}
                                                </td>
                                            </tr>
                                        </table>


                                    </div>


                                </div>

                                <div id="foto" class="tab-pane">
                                    <div class="timeline timeline-simple mt-xlg mb-md">
										<div class="tm-body">
											${data.lampiran.map(v => {
                                                return `
                                                    <ol class="tm-items">
                                                        <li>
                                                            <div class="tm-box">
                                                                <p>
                                                                    ${v.keterangan}
                                                                </p>
                                                                <div class="thumbnail-gallery">
                                                                    <a class="img-thumbnail lightbox" href="" data-plugin-options="{ &quot;type&quot;:&quot;image&quot; }">
                                                                        <img class="img-responsive" width="100%" src="" onerror="this.onerror=null;this.src='${SET.apiURL()}lampiran/file/${data.id}/${v.file}';">
                                                                        <span class="zoom">
                                                                            <i class="fa fa-search"></i>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                `
                                            }).join('')}
										</div>
									</div>
                                </div>

                                <div id="log" class="tab-pane">
                                
                                    <section class="panel panel-featured-left panel-featured-primary">
                                        <div class="panel-body">
                                            <div class="widget-summary">
                                                <div class="widget-summary-col widget-summary-col-icon">
                                                    <div class="summary-icon bg-primary">
                                                        <i class="fa fa-search"></i>
                                                    </div>
                                                </div>
                                                <div class="widget-summary-col">
                                                    <div class="summary">
                                                        <h4 class="title">Verifikasi</h4>
                                                        <div class="info">
                                                            ${data.verifikasi === null ? '<strong class="text-danger">Pending..</strong>' : `
                                                                <strong>Diverifikasi oleh : ${data.verifikasi.user.nama_lengkap}</strong>
                                                                <span class="text-primary">pada ${data.verifikasi.tgl_verifikasi}</span>
                                                            `}
                                                        </div>
                                                    </div>
                                                    <div class="summary-footer">
                                                        ${USER.level === 'ANALYST' && data.status === 'Proses' && data.verifikasi === null ? `
                                                            <button class="btn btn-danger btn_tolak">Tolak</button>
                                                            <button id="btn_verifikasi" class="btn btn-primary">Lakukan Verifikasi</button>
                                                        ` : ''}

                                                        ${data.verifikasi !== null ? `
                                                            <a class="btn btn-success" href = "#/verifikasi/${data.verifikasi.id}" > Lihat Hasil Verifikasi</a>
                                                        ` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section class="panel panel-featured-left panel-featured-info">
                                        <div class="panel-body">
                                            <div class="widget-summary">
                                                <div class="widget-summary-col widget-summary-col-icon">
                                                    <div class="summary-icon bg-info">
                                                        <i class="fa fa-file"></i>
                                                    </div>
                                                </div>
                                                <div class="widget-summary-col">
                                                    <div class="summary">
                                                        <h4 class="title">Survey</h4>
                                                        <div class="info">
                                                            ${data.survey === null ? '<strong class="text-danger">Pending..</strong>' : `
                                                                <strong>Disurvey oleh : ${data.survey.user.nama_lengkap}</strong>
                                                                <span class="text-primary">pada ${data.survey.tgl_survey}</span>
                                                            `}
                                                        </div>
                                                    </div>
                                                    <div class="summary-footer">
                                                         ${USER.level === 'MANAGER' && data.status === 'Proses' && data.verifikasi !== null && data.survey === null ? `
                                                            <button id="btn_survey" class="btn btn-primary">Lakukan Survey</button>
                                                        ` : ''}

                                                        ${data.survey !== null ? `
                                                            <a class="btn btn-success" href="#/survey/${data.survey.id}">Lihat Hasil Survey</a>
                                                        ` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    
                                    <section class="panel panel-featured-left panel-featured-success">
                                        <div class="panel-body">
                                            <div class="widget-summary">
                                                <div class="widget-summary-col widget-summary-col-icon">
                                                    <div class="summary-icon bg-success">
                                                        <i class="fa fa-check"></i>
                                                    </div>
                                                </div>
                                                <div class="widget-summary-col">
                                                    <div class="summary">
                                                        <h4 class="title">Approval</h4>
                                                        <div class="info">
                                                            ${data.approval === null ? '<strong class="text-danger">Pending..</strong>' : `
                                                                <strong>Diapprove oleh : ${data.approval.user.nama_lengkap}</strong>
                                                                <span class="text-primary">pada ${data.approval.tgl_approval}</span>
                                                            `}
                                                        </div>
                                                    </div>
                                                    <div class="summary-footer">
                                                        ${USER.level === 'MANAGER' && data.status === 'Proses' && data.verifikasi !== null && data.survey !== null && data.approval === null ? `
                                                            <button class="btn btn-danger btn_tolak">Tolak</button>
                                                            <button id="btn_approval" class="btn btn-primary">Lakukan Approval</button>
                                                        ` : ''}

                                                        ${data.approval !== null ? `
                                                            <a class="btn btn-success" href="#/approval/${data.approval.id}">Lihat Hasil Approval</a>
                                                        ` : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>

                            </div>
                        </div>

                    </div>
               </div>

                
            `

            $('.detail-container').html(html)
        },

        renderCalculateVerify: data => {
            let verifikasi;
            let total_penghasilan = parseInt(data.keuangan.penghasilan_lainnya) + parseInt(data.keuangan.penghasilan_perbulan)
            let total_pengeluaran = parseInt(data.keuangan.biaya) + parseInt((data.keuangan.angsuran_pinjaman_lain * data.keuangan.sisa_waktu_angsuran))
            let untung = total_penghasilan - total_pengeluaran;

            let hasil = untung * 3;
            let limit = (hasil * 50) / 100;

            let selisih = limit - data.angsuran

            if(selisih <= parseInt(-100000)){
                verifikasi = '<div class="text-danger text-right">Tidak Terverifikasi</div>'
            } else {
                verifikasi = '<div class="text-success text-right">Terverifikasi</div>'
            }

            let html = `
                <h4>Pendapatan</h4>
                <table class="table">
                    <tr>
                        <td style="width: 50%">Penghasilan Perbulan</td>
                        <td>Rp. ${SET.realCurrency(data.keuangan.penghasilan_perbulan)}</td>
                    </tr>
                    <tr>
                        <td style="width: 50%">Penghasilan Lainnya</td>
                        <td>Rp. ${SET.realCurrency(data.keuangan.penghasilan_lainnya)}</td>
                    </tr>
                    <tr>
                        <td style="width: 50%"><b>Total</b></td>
                        <td><b>Rp. ${SET.realCurrency(total_penghasilan)}</b></td>
                    </tr>
                </table>

                <br/>

                <h4>Pengeluaran</h4>
                <table class="table">
                    <tr>
                        <td style="width: 50%">Biaya-biaya</td>
                        <td>Rp. ${SET.realCurrency(data.keuangan.biaya)}</td>
                    </tr>
                    <tr>
                        <td style="width: 50%">Total Pinjaman Lain</td>
                        <td>Rp. ${SET.realCurrency(data.keuangan.total_pinjaman_lain)}</td>
                    </tr>
                    <tr>
                        <td style="width: 50%">Angsuran Pinjaman Lain</td>
                        <td>Rp. ${SET.realCurrency(data.keuangan.angsuran_pinjaman_lain)}</td>
                    </tr>
                    <tr>
                        <td style="width: 50%">Sisa Angsuran</td>
                        <td>${SET.realCurrency(data.keuangan.sisa_waktu_angsuran)} Bulan</td>
                    </tr>
                    <tr>
                        <td style="width: 50%"><b>Total</b></td>
                        <td><b>Rp. ${SET.realCurrency(total_pengeluaran)}</b></td>
                    </tr>
                </table>

                <br/>

                <h4>Hasil Verifikasi</h4>

                <table class="table">
                    <tr>
                        <td>
                            <h4>${verifikasi}</h4>
                        </td>
                    </tr>
                </table>

                <input type="hidden" name="aplikasi_id" value="${data.id}">
            `

            $('#verifikasi_container').html(html)
        },

        renderFormSurvey: data => {
            let html = `
                <h4>Checklist Survey</h4>
                <table class="table table-bordered">
                    <tr>
                        <td>Nama Pemohon Sesuai Dengan Aplikasi</td>
                        <td>
                            <input type="checkbox" name="check[0]" style="width: 30px; height: 30px;" id="check_0" value="Y">
                            <input type="hidden" name="deskripsi[0]" id="deskripsi_0" value="Nama Pemohon Sesuai Dengan Aplikasi">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[0]" id="note_0"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Alamat Tempat Tinggal Sesuai</td>
                        <td>
                            <input type="checkbox" name="check[1]" style="width: 30px; height: 30px;" id="check_1" value="Y">
                            <input type="hidden" name="deskripsi[1]" id="deskripsi_1" value="Alamat Tempat Tinggal Sesuai">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[1]" id="note_1"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Alamat Tempat Usaha Sesuai Aplikasi</td>
                        <td>
                            <input type="checkbox" name="check[2]" style="width: 30px; height: 30px;" id="check_2" value="Y">
                            <input type="hidden" name="deskripsi[2]" id="deskripsi_2" value="Alamat Tempat Usaha Sesuai">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[2]" id="note_2"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Pekerjaan Pemohon Sesuai Aplikasi</td>
                        <td>
                            <input type="checkbox" name="check[3]" style="width: 30px; height: 30px;" id="check_3" value="Y">
                            <input type="hidden" name="deskripsi[3]" id="deskripsi_3" value="Pekerjaan Pemohon Sesuai">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[3]" id="note_3"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Penghasilan Perbulan Sesuai Aplikasi</td>
                        <td>
                            <input type="checkbox" name="check[4]" style="width: 30px; height: 30px;" id="check_4" value="Y">
                            <input type="hidden" name="deskripsi[4]" id="deskripsi_4" value="Penghasilan Perbulan Sesuai Aplikasi">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[4]" id="note_4"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Lama Tinggal Sesuai Aplikasi</td>
                        <td>
                            <input type="checkbox" name="check[5]" style="width: 30px; height: 30px;" id="check_5" value="Y">
                            <input type="hidden" name="deskripsi[5]" id="deskripsi_5" value="Lama Tinggal Sesuai Aplikasi">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[5]" id="note_5"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Menanyakan Nama Pasangan</td>
                        <td>
                            <input type="checkbox" name="check[6]" style="width: 30px; height: 30px;" id="check_6" value="Y">
                            <input type="hidden" name="deskripsi[6]" id="deskripsi_6" value="Menanyakan Nama Pasangan">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[6]" id="note_6"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Menanyakan Pekerjaan Pasangan</td>
                        <td>
                            <input type="checkbox" name="check[7]" style="width: 30px; height: 30px;" id="check_7" value="Y">
                            <input type="hidden" name="deskripsi[7]" id="deskripsi_7" value="Menanyakan Pekerjaan Pasangan">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[7]" id="note_7"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Menanyakan Bidang Usaha</td>
                        <td>
                            <input type="checkbox" name="check[8]" style="width: 30px; height: 30px;" id="check_8" value="Y">
                            <input type="hidden" name="deskripsi[8]" id="deskripsi_8" value="Menanyakan Bidang Usaha">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[8]" id="note_8"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Menanyakan Lama Usaha</td>
                        <td>
                            <input type="checkbox" name="check[9]" style="width: 30px; height: 30px;" id="check_9" value="Y">
                            <input type="hidden" name="deskripsi[9]" id="deskripsi_9" value="Menanyakan Lama Usaha">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[9]" id="note_9"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Menanyakan Status Kepemilikan Usaha</td>
                        <td>
                            <input type="checkbox" name="check[10]" style="width: 30px; height: 30px;" id="check_10" value="Y">
                            <input type="hidden" name="deskripsi[10]" id="deskripsi_10" value="Menanyakan Status Kepemilikan Usaha">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[10]" id="note_10"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Penghasilan Dari Usaha Perbulan</td>
                        <td>
                            <input type="checkbox" name="check[11]" style="width: 30px; height: 30px;" id="check_11" value="Y">
                            <input type="hidden" name="deskripsi[11]" id="deskripsi_11" value="Penghasilan Dari Usaha Perbulan">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[11]" id="note_11"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Pengeluaran Selama Sebulan</td>
                        <td>
                            <input type="checkbox" name="check[12]" style="width: 30px; height: 30px;" id="check_12" value="Y">
                            <input type="hidden" name="deskripsi[12]" id="deskripsi_12" value="Pengeluaran Selama Sebulan">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[12]" id="note_12"></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Pinjaman Yang Masih Berlaku</td>
                        <td>
                            <input type="checkbox" name="check[13]" style="width: 30px; height: 30px;" id="check_13" value="Y">
                            <input type="hidden" name="deskripsi[13]" id="deskripsi_13" value="Pinjaman Yang Masih Berlaku">
                        </td>
                        <td>
                            <textarea class="form-control" name="note[13]" id="note_13"></textarea>
                        </td>
                    </tr>
                </table>

                <br>

                <h4>Foto Survey</h4>
                <div class="form-row">
                    <div class="form-group col">
                        <label class="font-weight-bold text-dark text-2">Foto Tempat Usaha</label>
                        <input type="file" required name="lampiran_file[0]" id="lampiran_file_0" class="dropify">
                        <input type="hidden" name="lampiran_keterangan[0]" id="lampiran_keterangan_0" value="Foto Tempat Usaha">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label class="font-weight-bold text-dark text-2">Foto Nasabah + Tempat Usaha</label>
                        <input type="file" required name="lampiran_file[1]" id="lampiran_file_1" class="dropify">
                        <input type="hidden" name="lampiran_keterangan[1]" id="lampiran_keterangan_1" value="Foto Nasabah + Tempat Usaha">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label class="font-weight-bold text-dark text-2">Foto Jaminan</label>
                        <input type="file" required name="lampiran_file[2]" id="lampiran_file_2" class="dropify">
                        <input type="hidden" name="lampiran_keterangan[2]" id="lampiran_keterangan_2" value="Foto Jaminan">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col">
                        <label class="font-weight-bold text-dark text-2">Foto Barang Jaminan</label>
                        <input type="file" required name="lampiran_file[3]" id="lampiran_file_3" class="dropify">
                        <input type="hidden" name="lampiran_keterangan[3]" id="lampiran_keterangan_3" value="Foto Barang Jaminan">
                    </div>
                </div>

                <br>

                <h4>Note</h4>
                <div class="form-row">
                    <div class="form-group col">
                        <textarea name="keterangan" id="keterangan" class="form-control" rows="10"></textarea>
                        <input type="hidden" name="aplikasi_id" id="aplikasi_id" class="form-control" value="${data.id}">
                    </div>
                </div>
            `

            $('#survey_container').html(html)

            $('.dropify').dropify()
        },

        renderFormApproval: (data, kredit) => {
            let filtered = kredit.filter(v => v.pinjaman <= data.limit_kredit);

            let html = `
                <h4>Limit Aplikasi</h4>
                <table class="table table-bordered">
                    <tr>
                        <td>Angunan</td>
                        <td>${data.angunan}</td>
                    </tr>
                    <tr>
                        <td>Limit Kredit</td>
                        <td>Rp. ${SET.realCurrency(data.limit_kredit)}</td>
                    </tr>
                    <tr>
                        <td>Angsuran</td>
                        <td>Rp. ${SET.realCurrency(data.angsuran)}</td>
                    </tr>
                    <tr>
                        <td>Jangka Waktu</td>
                        <td>${data.jangka_waktu} Bulan</td>
                    </tr>
                </table>

                <br>

                <h4>Limit Approval</h4>
                <table class="table table-bordered">
                    <tr>
                        <td>Limit Kredit</td>
                        <td>
                            <select class="form-control" id="limit_approve" name="limit_approve">
                                ${filtered.map(v => {
                                    return `
                                        <option value="${v.pinjaman}" ${v.pinjaman === data.limit_kredit ? 'selected' : ''}>Rp. ${SET.realCurrency(v.pinjaman)}</option>
                                    `
                                }).join('')}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Angsuran</td>
                        <td>
                            <div id="angsuran_container">Rp. ${SET.realCurrency(data.angsuran)}</div>
                            <input type="hidden" id="angsuran_approve" name="angsuran_approve" value="${data.angsuran}">
                        </td>
                    </tr>
                    <tr>
                        <td>Jangka Waktu</td>
                        <td>
                            <div>${data.jangka_waktu} Bulan</div>
                            <input type="hidden" id="jangka_waktu_approve" name="jangka_waktu_approve" value="${data.jangka_waktu}">
                        </td>
                    </tr>
                </table>

                <input type="hidden" value="${data.id}" id="aplikasi_id" name="aplikasi_id">
            `

            $('#approval_container').html(html)

            $('#limit_approve').on('change', function () {
                let limit = $(this).val()
                let jangka_waktu = $('#jangka_waktu_approve').val()

                filtered.filter(v => v.pinjaman === parseFloat(limit)).map(x => {
                    x.detail.filter(y => y.jangka_waktu === parseFloat(jangka_waktu)).map(z => {
                        $('#angsuran_approve').val(z.angsuran)
                        $('#angsuran_container').text(`Rp. ${SET.realCurrency(z.angsuran)}`)
                    })
                })
            })
        },

        renderDetailVerifikasi: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <section>
                            <button class="btn btn-primary" style="float: right; width: 200px;" id="print"><i class="fa fa-print"></i> Print</button>
                        </section>
                    </div>
                </div>

                <br>

                <section class="panel">
                    <div class="panel-body">
                        <div id="detail" class="printableArea">

                            <div class="invoice">

                                <header class="clearfix">
									<div class="row">
										<div class="col-sm-6 mt-md">
											<h2 class="h2 mt-none mb-sm text-dark text-weight-bold">Dokumen Verifikasi</h2>
											<h4 class="h4 m-none text-dark text-weight-bold">No. ${data.no_verifikasi}</h4>

                                            <h5>Tanggal : ${data.tgl_verifikasi}</h5>
                                        </div>
                                        <div class="col-sm-6 text-right mt-md mb-md">
                                            <div class="ib">
												<img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
											</div>
											<address class="ib mr-xlg">
												Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA
											</address>
										</div>
									</div>
								</header>

                                <div class="bill-info">

                                    <div class="text-center"><h3><b><u>PENGUMUMAN</u></b></h3></div>
                                    <div class="text-center"><h5><b>No. ${data.no_verifikasi}</b></h5></div>

                                    <br><br>

                                    <table style="width: 50%">
                                        <tr>
                                            <td>No Aplikasi</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.no_aplikasi}</td>
                                        </tr>
                                        <tr>
                                            <td>Nama Pemohon</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.pemohon.nama_lengkap}</td>
                                        </tr>
                                        <tr>
                                            <td>Angunan</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.angunan}</td>
                                        </tr>
                                        <tr>
                                            <td>Limit Diajukan</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.aplikasi.limit_kredit)}</td>
                                        </tr>
                                        <tr>
                                            <td>Angsuran</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.aplikasi.angsuran)}</td>
                                        </tr>
                                        <tr>
                                            <td>Jangka Waktu</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.jangka_waktu} Bulan</td>
                                        </tr>
                                    </table>

                                    <br><br>

                                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                                </div>

                                <br><br>

                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 50%" class="text-center">

                                        </td>
                                        <td style="width: 50%" class="text-center">
                                            <div>Diverifikasi oleh</div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <div>( ${data.user.nama_lengkap} )</div>
                                        </td>
                                    </tr>
                                </table>


                            </div>
                        </div>
                    </div>
                </section>
            `

            $('.detail-container').html(html)
        },

        renderDetailSurvey: data => {
            let html = `
                <section>
                    <button class="btn btn-primary" style="float: right; width: 200px;" id="print"><i class="fa fa-print"></i> Print</button>
                </section>

               <div class="row">
                    <div class="col-md-12">
                        <div class="tabs">
                            <ul class="nav nav-tabs">
                                <li class="active">
                                    <a href="#detail" data-toggle="tab">Aplikasi</a>
                                </li>
                                <li>
                                    <a href="#foto" data-toggle="tab">Foto</a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div id="detail" class="tab-pane active">

                                    <div class="invoice printableArea">

                                        <header class="clearfix">
                                            <div class="row">
                                                <div class="col-sm-6 mt-md">
                                                    <h2 class="h2 mt-none mb-sm text-dark text-weight-bold">Hasil Survey</h2>
                                                    <h4 class="h4 m-none text-dark text-weight-bold">No. ${data.no_survey}</h4>

                                                    <h5>Tanggal : ${data.tgl_survey}</h5>
                                                </div>
                                                <div class="col-sm-6 text-right mt-md mb-md">
                                                    <div class="ib">
                                                        <img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
                                                    </div>
                                                    <address class="ib mr-xlg">
                                                        Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA
                                                    </address>
                                                </div>
                                            </div>
                                        </header>

                                        <div class="bill-info">
                                            <h4><u>Aplikasi</u></h4>
                                            <table style="width: 50%">
                                                <tr>
                                                    <td>No Aplikasi</td>
                                                    <td>:</td>
                                                    <td>${data.aplikasi.no_aplikasi}</td>
                                                </tr>
                                                <tr>
                                                    <td>Nama Pemohon</td>
                                                    <td>:</td>
                                                    <td>${data.aplikasi.pemohon.nama_lengkap}</td>
                                                </tr>
                                                <tr>
                                                    <td>Angunan</td>
                                                    <td>:</td>
                                                    <td>${data.aplikasi.angunan}</td>
                                                </tr>
                                                <tr>
                                                    <td>Limit Diajukan</td>
                                                    <td>:</td>
                                                    <td>Rp. ${SET.realCurrency(data.aplikasi.limit_kredit)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Angsuran</td>
                                                    <td>:</td>
                                                    <td>Rp. ${SET.realCurrency(data.aplikasi.angsuran)}</td>
                                                </tr>
                                                <tr>
                                                    <td>Jangka Waktu</td>
                                                    <td>:</td>
                                                    <td>${data.aplikasi.jangka_waktu} Bulan</td>
                                                </tr>
                                            </table>
                                            
                                            <br>
                                            
                                            <h4><u>Checklist</u></h4>
                                            <table class="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Deskripsi</th>
                                                        <th style="width: 10%">Check</th>
                                                        <th>Note</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    ${data.survey_detail.map(v => {
                                                        return `
                                                            <tr>
                                                                <td>${v.deskripsi_survey}</td>
                                                                <td style="width: 10%" class="text-center">${v.check === 'Y' ? '<i class="fa fa-check-square fa-2x"></i>' : '<i class="fa fa-square fa-2x"></i>'}</td>
                                                                <td>${SET.replaceNull(v.note)}</td>
                                                            </tr>
                                                        `
                                                    }).join('')}
                                                </tbody>
                                            </table>

                                            <br>
                                            
                                            <h4><u>Keterangan Lain</u></h4>
                                            <h5>${data.keterangan}</h5>
                                        </div>

                                        <br>

                                        <table style="width: 100%">
                                            <tr>
                                                <td style="width: 50%" class="text-center">

                                                </td>
                                                <td style="width: 50%" class="text-center">
                                                    <div>Disurvey Oleh</div>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <br/>
                                                    <div>( ${data.user.nama_lengkap} )</div>
                                                </td>
                                            </tr>
                                        </table>


                                    </div>


                                </div>

                                <div id="foto" class="tab-pane">
                                    <div class="timeline timeline-simple mt-xlg mb-md">
										<div class="tm-body">
											${data.survey_foto.map(v => {
                return `
                                                    <ol class="tm-items">
                                                        <li>
                                                            <div class="tm-box">
                                                                <p>
                                                                    ${v.keterangan}
                                                                </p>
                                                                <div class="thumbnail-gallery">
                                                                    <a class="img-thumbnail lightbox" href="" data-plugin-options="{ &quot;type&quot;:&quot;image&quot; }">
                                                                        <img class="img-responsive" width="100%" src="" onerror="this.onerror=null;this.src='${SET.apiURL()}survey/file/${data.id}/${v.file}';">
                                                                        <span class="zoom">
                                                                            <i class="fa fa-search"></i>
                                                                        </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                `
            }).join('')}
										</div>
									</div>
                                </div>

                            </div>
                        </div>

                    </div>
               </div>

                
            `

            $('.detail-container').html(html)
        },

        renderDetailApproval: data => {
            let html = `
                <div class="row">
                    <div class="col-md-12">
                        <section>
                            <button class="btn btn-primary" style="float: right; width: 200px;" id="print"><i class="fa fa-print"></i> Print</button>
                        </section>
                    </div>
                </div>

                <br>

                <section class="panel">
                    <div class="panel-body">
                        <div id="detail" class="printableArea">

                            <div class="invoice">

                                <header class="clearfix">
									<div class="row">
										<div class="col-sm-6 mt-md">
											<h2 class="h2 mt-none mb-sm text-dark text-weight-bold">Dokumen Approval</h2>
                                            <h4 class="h4 m-none text-dark text-weight-bold">No. ${data.no_approval}</h4>
                                            <h5>Tanggal : ${data.tgl_approval}</h5>
										</div>
                                        <div class="col-sm-6 text-right mt-md mb-md">
                                            <div class="ib">
												<img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
											</div>
											<address class="ib mr-xlg">
												Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA
											</address>
										</div>
									</div>
								</header>

                                <div class="bill-info">

                                    <div class="text-center"><h3><b><u>PENGUMUMAN</u></b></h3></div>
                                    <div class="text-center"><h5><b>No. ${data.no_approval}</b></h5></div>

                                    <br><br>
                                    
                                    <h4><u>Limit Yang Diajukan</u></h4>
                                    <table style="width: 50%">
                                        <tr>
                                            <td>No Aplikasi</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.no_aplikasi}</td>
                                        </tr>
                                        <tr>
                                            <td>Nama Pemohon</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.pemohon.nama_lengkap}</td>
                                        </tr>
                                        <tr>
                                            <td>Angunan</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.angunan}</td>
                                        </tr>
                                        <tr>
                                            <td>Limit Diajukan</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.aplikasi.limit_kredit)}</td>
                                        </tr>
                                        <tr>
                                            <td>Angsuran</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.aplikasi.angsuran)}</td>
                                        </tr>
                                        <tr>
                                            <td>Jangka Waktu</td>
                                            <td>:</td>
                                            <td>${data.aplikasi.jangka_waktu} Bulan</td>
                                        </tr>
                                    </table>

                                    <br>

                                    <h4><u>Limit Yang Disetujui</u></h4>
                                    <table style="width: 50%">
                                        <tr>
                                            <td>Limit Disetujui</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.limit_approve)}</td>
                                        </tr>
                                        <tr>
                                            <td>Angsuran</td>
                                            <td>:</td>
                                            <td>Rp. ${SET.realCurrency(data.angsuran_approve)}</td>
                                        </tr>
                                        <tr>
                                            <td>Jangka Waktu</td>
                                            <td>:</td>
                                            <td>${data.jangka_waktu_approve} Bulan</td>
                                        </tr>
                                    </table>

                                    <br><br>

                                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
                                </div>

                                <br><br>

                                <table style="width: 100%">
                                    <tr>
                                        <td style="width: 50%" class="text-center">

                                        </td>
                                        <td style="width: 50%" class="text-center">
                                            <div>Diapprove oleh</div>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>
                                            <div>( ${data.user.nama_lengkap} )</div>
                                        </td>
                                    </tr>
                                </table>


                            </div>
                        </div>
                    </div>
                </section>
            `

            $('.detail-container').html(html)
        },

        renderLaporanView: (data, periode, callback) => {
            let proses, terima, tolak
            let html = '';
            let total = 0;
            let list_bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

            if (data.length === 0) {
                proses = 0;
                terima = 0;
                tolak = 0;

                html += `
                    <div class="text-center">
                        <h4>Data tidak tersedia</h4>
                    </div>
                `
            } else {

                proses = data.filter(v => v.status === 'Proses').length;
                terima = data.filter(v => v.status === 'Terima').length;
                tolak = data.filter(v => v.status === 'Tolak').length;

                html += `
                    <header class="panel-heading">
                        <div class="panel-actions">
                            <button class="btn btn-success" id="btn_print" style="margin-right: 10px;">
                                <i class="fa fa-print"></i> Print
                            </button>
                        </div>
                    </header>
                    <div class="panel-body" id="print_area">
                        <div class="invoice">
                            <header class="clearfix">
                                <div class="row">
                                    <div class="col-sm-6"></div>
                                    <div class="col-sm-6 text-right mt-md mb-md">
                                        <div class="ib">
                                            <img src="${SET.baseURL()}assets/private/images/logo.png" class="img-fluid" style="width: 50%" alt="Mandiri">
                                        </div>
                                        <address class="ib mr-xlg">
                                            Jl. Jenderal Gatot Subroto Kav. 36-38<br> Jakarta 12190 Indonesia<br> Telp: 14000, +62-21-52997777<br> Fax: +62-21-52997735<br> Email: mandiricare@bankmandiri.co.id<br> SWIFT Code: BMRIIDJA
                                        </address>
                                    </div>
                                </div>
                            </header>

                            <h4>Laporan Pengajuan Aplikasi Periode ${list_bulan[parseInt(periode.bulan) - 1]} ${periode.tahun}</h4>

                            <br/>

                            <div class="row">
                                <div class="col-md-12" id="chart_container">
                                    <canvas id="progressChart" height="100"></canvas>
                                </div>
                            </div>

                            <br/>

                            <table class="table table-bordered table-striped mb-none" style="font-size: 12px">
                                <thead>
                                    <tr>
                                        <th>No Aplikasi</th>
                                        <th>Tgl Aplikasi</th>
                                        <th>Nama Pemohon</th>
                                        <th>Limit</th>
                                        <th>Jangka Waktu</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${data.map(v => {
                                        return `
                                            <tr>
                                                <td>${v.no_aplikasi}</td>
                                                <td>${v.tgl_aplikasi}</td>
                                                <td>${v.pemohon.nama_lengkap}</td>
                                                <td>Rp. ${SET.realCurrency(v.limit_kredit)}</td>
                                                <td>${v.jangka_waktu} Bulan</td>
                                                <td>${v.status}</td>
                                            </tr>
                                        `
                                    }).join('')}
                                </tbody>
                            </table>
                            
                            <br/>

                            <table style="width: 100%">
                                <tr>
                                    <td style="width: 50%">
                                    
                                    </td>
                                    <td style="width: 50%">
                                        <table style="width: 100%">
                                            <tr>
                                                <td>Total Proses</td>
                                                <td>${proses} Aplikasi</td>
                                            </tr>
                                            <tr>
                                                <td>Total Terima</td>
                                                <td>${terima} Aplikasi</td>
                                            </tr>
                                            <tr>
                                                <td>Total Tolak</td>
                                                <td>${tolak} Aplikasi</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                `
            }

            $('#report_container').html(html)
            callback(proses, terima, tolak)
        }
    }
})(settingController)


const mainUI = ((SET) => {
    return {
        renderProfile: data => {
            let html = `
                <div class="row">
                    <div class="col-md-4">
                        <div class="thumb-info mb-md">
                            <img src="${SET.baseURL()}assets/private/images/user-default.jpg" class="rounded img-responsive" alt="John Doe">
                            <div class="thumb-info-title">
                                <span class="thumb-info-inner">${data.nama_lengkap}</span>
                                <span class="thumb-info-type">${data.level}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <ul class="simple-user-list text-right">
                            <li>
                                <span class="title">Nama</span>
                                <span class="message truncate">${data.nama_lengkap}</span>
                            </li>
                            <li>
                                <span class="title">Username</span>
                                <span class="message truncate">${data.username}</span>
                            </li>
                            <li>
                                <span class="title">Status</span>
                                ${data.active === 'Y' ? '<span class="label label-primary">Aktif</span>' : '<span class="label label-danger">Tidak Aktif</span>'}
                            </li>
                            <li>
                                <span class="title">Tanggal Terdaftar</span>
                                <span class="message truncate">${data.created_at}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            `

            $('#profile_container').html(html)
        }
    }
})(settingController)



const mainController = ((SET, UI) => {

    const _loadContent = path => {
        $.ajax({
            url: `${SET.baseURL()}administrator/page/${path}`,
            dataType: 'HTML',
            beforeSend: function () {
                SET.pageLoader()
            },
            success: function (response) {
                $('#app_content').html(response)
                $('body').removeClass('modal-open')
                $('body').removeAttr('style')
            },
            error: function () {
                $('#app_content').load(`${SET.baseURL()}page_not_found`);
            },
            complete: () => {
                SET.closePageLoader()
            }
        })
    }

    const _setRoute = () => {
        let path;

        if (location.hash) {
            path = location.hash;
            _loadContent(path.substr(2));
        } else {
            location.hash = '#/dashboard';
        }

        $(window).on('hashchange', function (e) {
            path = location.hash;

            if ($('.modal').hasClass('show')) {
                // $('.modal').modal('hide');
                $('.modal-backdrop').remove();
            }

            _loadContent(path.substr(2));
        });
    }

    const _logoutApp = () => {
        $('.logout').on('click', function () {
            $.ajax({
                url: `${SET.baseURL()}logout`,
                type: 'GET',
                dataType: 'JSON',
                beforeSend: function () {
                    SET.pageLoader()
                },
                success: ({ data }) => {
                    window.location.replace(`${SET.baseURL()}administrator/login`);
                },
                error: err => {
                    toastr.error(err.message, 'Failed', { "progressBar": true, "closeButton": true });
                },
                complete: () => {
                    SET.closePageLoader()
                }
            })
        })
    }

    const openProfile = USER => {
        $('#setting-profile').on('click', function () {
            $.ajax({
                url: `${SET.apiURL()}setting/profile`,
                type: 'GET',
                dataType: 'JSON',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)
                },
                success: ({ results }) => {
                    UI.renderProfile(results)
                },
                error: err => {
                    toastr.error('Tidak dapat mengakses server', 'Gagal')
                }
            })

            $('#modal_profile').modal('show')
        })
    }

    const openPassword = () => {
        $('#setting-password').on('click', function () {
            $('.form_password')[0].reset()
            $('#modal_password').modal('show')
        })
    }

    const submitPassword = USER => {
        $('.form_password').on('submit', function (e) {
            e.preventDefault()
        }).validate({
            rules: {
                old_password: 'required',
                new_password: 'required',
                retype_password: 'required'
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}setting/change_password`,
                    type: 'POST',
                    data: $(form).serialize(),
                    dataType: 'JSON',
                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)

                        SET.contentLoader('.modal-content')
                    },
                    success: (data) => {
                        $('#modal_password').modal('hide')
                        toastr.success('Berhasil melakukan ganti password', 'Berhasil')
                    },
                    error: err => {
                        toastr.error('Gagal melakukan ganti password', 'Gagal')
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

    return {
        init: USER => {
            _logoutApp()
            _setRoute()


            openPassword()
            openProfile(USER)
            submitPassword(USER)
        }
    }
})(settingController, mainUI)



const appController = ((SET, DT, UI, LU) => {

    /* -------------------- DETAIL ACTION ----------------- */
    const _fetchPerformanceAnalytic = (TOKEN, callback) => {
        $.ajax({
            url: `${SET.apiURL()}analytic/performance`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                SET.contentLoader('#performance_container')
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {
                SET.closeSelectedElement('#performance_container')
            }
        })
    }

    const _fetchAllAplikasi = callback => {
        $.ajax({
            url: `${SET.apiURL()}aplikasi`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _fetchAplikasi = (id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}aplikasi/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _fetchVerifikasi = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}verifikasi/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _fetchSurvey = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}survey/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _fetchApproval = (TOKEN, id, callback) => {
        $.ajax({
            url: `${SET.apiURL()}approval/${id}`,
            type: 'GET',
            dataType: 'JSON',
            beforeSend: xhr => {
                xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
            },
            success: res => {
                callback(res.results)
            },
            error: ({ responseJSON }) => {
                toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
            },
            statusCode: {
                404: () => {
                    $('#app_content').load(`${SET.baseURL()}data_not_found`)
                },
                401: err => {
                    let error = err.responseJSON

                    if (error.message === 'Unauthenticated.') {
                        $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                    }

                    if (error.message === 'Unauthorized.') {
                        $('#app_content').load(`${SET.baseURL()}unauthorized`)
                    }
                }
            },
            complete: () => {

            }
        })
    }

    const _detailObserver = (USER, id, data) => {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        let kredit = [
            {
                id: 1,
                pinjaman: 10000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 860664.30,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 443206.10,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 304219.37,
                    bunga: 6,
                }]
            },
            {
                id: 2,
                pinjaman: 15000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 1290996.45,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 664809.15,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 456329.06,
                    bunga: 6,
                }]
            },
            {
                id: 3,
                pinjaman: 20000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 1721328.59,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 886412.21,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 608438.75,
                    bunga: 6,
                }]
            },
            {
                id: 4,
                pinjaman: 25000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 2151660.74,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 1108015.26,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 760548.44,
                    bunga: 6,
                }]
            },
            {
                id: 5,
                pinjaman: 30000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 2581992.89,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 1329618.31,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 912658.12,
                    bunga: 6,
                }]
            },
            {
                id: 6,
                pinjaman: 35000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 3012325.04,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 1551221.36,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1064767.81,
                    bunga: 6,
                }]
            },
            {
                id: 7,
                pinjaman: 40000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 3442657.19,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 17728824.41,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 12168877.50,
                    bunga: 6,
                }]
            },
            {
                id: 8,
                pinjaman: 45000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 3872989.34,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 1994427.46,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1368987.19,
                    bunga: 6,
                }]
            },
            {
                id: 9,
                pinjaman: 50000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 4303321.49,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 2216030.51,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1521096.87,
                    bunga: 6,
                }]
            },
            {
                id: 10,
                pinjaman: 55000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 4733653.63,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 2437633.56,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1673206.56,
                    bunga: 6,
                }]
            },
            {
                id: 11,
                pinjaman: 60000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 5163985.78,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 2659236.62,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1825316.25,
                    bunga: 6,
                }]
            },
            {
                id: 12,
                pinjaman: 65000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 5594317.93,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 2880839.67,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 1977425.93,
                    bunga: 6,
                }]
            },
            {
                id: 13,
                pinjaman: 70000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 6024650.08,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 3102442.72,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 2129535.62,
                    bunga: 6,
                }]
            },
            {
                id: 14,
                pinjaman: 75000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 6454982.23,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 3324045.77,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 22881645.31,
                    bunga: 6,
                }]
            },
            {
                id: 15,
                pinjaman: 80000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 6885314.38,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 3545648.82,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 2433755,
                    bunga: 6,
                }]
            },
            {
                id: 16,
                pinjaman: 85000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 7315646.53,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 3767251.887,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 2585864.68,
                    bunga: 6,
                }]
            },
            {
                id: 17,
                pinjaman: 90000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 7745978.67,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 3988854.92,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 2737974.37,
                    bunga: 6,
                }]
            },
            {
                id: 18,
                pinjaman: 100000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 8606642.97,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 4432061.03,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 3042193.75,
                    bunga: 6,
                }]
            },
            {
                id: 19,
                pinjaman: 125000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 10758303.71,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 5540076.28,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 3802741.18,
                    bunga: 6,
                }]
            },
            {
                id: 20,
                pinjaman: 150000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 12909964.46,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 6648091.54,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 4563290.62,
                    bunga: 6,
                }]
            },
            {
                id: 21,
                pinjaman: 200000000,
                detail: [{
                    jangka_waktu: 12,
                    angsuran: 17213285.94,
                    bunga: 6,
                }, {
                    jangka_waktu: 24,
                    angsuran: 8864122.05,
                    bunga: 6,
                }, {
                    jangka_waktu: 36,
                    angsuran: 6084387.49,
                    bunga: 6,
                }]
            },
        ];

        let container = document.querySelector(".detail-container")

        let observer = new MutationObserver(function (mutations, observer) {

            if (container.contains($('.btn_tolak')[0])) {
                $('.btn_tolak').on('click', function () {
                    $('#aplikasi_id').val(id)
                    $('#modal_tolak').modal('show');
                    _submitTolak(USER, id)
                })
            }

            if (container.contains($('#btn_verifikasi')[0])) {
                $('#btn_verifikasi').on('click', function(){
                    $('#modal_verifikasi').modal('show');

                    UI.renderCalculateVerify(data)
                    _submitVerifikasi(USER, id)
                })
            }

            if (container.contains($('#btn_survey')[0])) {
                $('#btn_survey').on('click', function(){
                    $('#modal_survey').modal('show');

                    UI.renderFormSurvey(data)
                    _submitSurvey(USER, id)
                })
            }

            if (container.contains($('#btn_approval')[0])) {
                $('#btn_approval').on('click', function(){
                    $('#modal_approval').modal('show');

                    UI.renderFormApproval(data, kredit)
                    _submitApproval(USER, id)
                })
            }

            observer.disconnect();
        });

        observer.observe(container, {
            subtree: true,
            attributes: true,
            childList: true,
        });
    }

    const _submitVerifikasi = (USER, id) => {
        $('#form_verifikasi').submit(function(e){
            e.preventDefault()

            $.ajax({
                url: `${SET.apiURL()}verifikasi`,
                type: 'POST',
                dataType: 'JSON',
                data: $(this).serialize(),
                beforeSend: xhr => {
                    xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)

                    SET.contentLoader('.modal-content')
                },
                success: res => {
                    toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    $('#modal_verifikasi').modal('hide');
                    location.hash = `#/verifikasi/${res.results.id}`
                },
                error: ({ responseJSON }) => {
                    toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                },
                complete: () => {
                    SET.closeSelectedElement('.modal-content')
                }
            })

        })
    }

    const _submitApproval = (USER, id) => {
        $('#form_approval').submit(function(e){
            e.preventDefault()

            $.ajax({
                url: `${SET.apiURL()}approval`,
                type: 'POST',
                dataType: 'JSON',
                data: $(this).serialize(),
                beforeSend: xhr => {
                    xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)

                    SET.contentLoader('.modal-content')
                },
                success: res => {
                    toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    location.hash = `#/approval/${res.results.id}`
                },
                error: ({ responseJSON }) => {
                    toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                },
                complete: () => {
                    SET.closeSelectedElement('.modal-content')
                }
            })

        })
    }

    const _submitSurvey = (USER, id) => {
        $('#form_survey').validate({
            rules: {
                keterangan: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}survey`,
                    type: 'POST',
                    dataType: 'JSON',
                    data: new FormData(form),
                    contentType: false,
                    processData: false,
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)

                        SET.contentLoader('.modal-content')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/survey/${res.results.id}`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

    const _submitTolak = (USER, id) => {
        $('#form_tolak').validate({
            rules: {
                keterangan: 'required',
            },
            submitHandler: form => {
                $.ajax({
                    url: `${SET.apiURL()}aplikasi/${id}`,
                    type: 'PUT',
                    dataType: 'JSON',
                    data: $(form).serialize(),
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)

                        SET.contentLoader('.modal-content')
                    },
                    success: res => {
                        toastr.success(res.message, 'Success', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                        location.hash = `#/ditolak`
                    },
                    error: ({ responseJSON }) => {
                        toastr.error(responseJSON.message, 'Failed', { "progressBar": true, "closeButton": true, "positionClass": 'toast-bottom-right' });
                    },
                    complete: () => {
                        SET.closeSelectedElement('.modal-content')
                    }
                })
            }
        })
    }

    const _printAll = () => {
        $('.detail-container').on('click', '#print', function () {
            var mode = 'iframe'; //popup
            var close = mode == "popup";
            var options = {
                mode: mode,
                popClose: close
            };
            $("div.printableArea").printArea(options);
        });
    }

    const openAdd = () => {
        let add = $('.btn-add')


        add.on('click', function () {
            let validator = $('.form-add').validate()
            validator.resetForm()

            $('.form-add')[0].reset();
            $('#modal-add').modal('show');
        })
    }

    const submitAdd = (TOKEN, table) => {
        let form = $('.form-add')

        form.validate({
            rules: {
                nama_lengkap: 'required',
                username: 'required',
                active: 'required',
                level: 'required'
            },
            submitHandler: add => {
                $.ajax({
                    url: `${SET.apiURL()}user`,
                    method: 'POST',
                    dataType: 'JSON',
                    data: $(add).serialize(),
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#modal-add .modal-content');
                    },
                    success: res => {
                        table.ajax.reload()
                        $('#modal-add').modal('hide')
                        toastr.success(res.message, 'Berhasil')
                    },
                    error: err => {
                        toastr.error(err.responseJSON.message, 'Gagal')
                    },
                    complete: () => {
                        SET.closeSelectedElement('#modal-add .modal-content')
                    }
                })
            }
        })
    }

    const submitEdit = (TOKEN, table) => {
        let form = $('.form-edit')

        form.on('submit', function (e) {
            e.preventDefault()
        }).validate({
            rules: {
                nama_lengkap: 'required',
                username: 'required',
                active: 'required',
                level: 'required'
            },
            submitHandler: edit => {
                let id = $('#edit_id_user').val()

                $.ajax({
                    url: `${SET.apiURL()}user/${id}`,
                    method: 'PUT',
                    dataType: 'JSON',
                    data: $(edit).serialize(),
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                        SET.contentLoader('#modal-edit .modal-content');
                    },
                    success: res => {
                        table.ajax.reload()
                        $('#modal-edit').modal('hide')
                        toastr.success(res.message, 'Berhasil')
                    },
                    error: err => {
                        toastr.error(err.error, 'Gagal')
                    },
                    complete: () => {
                        SET.closeSelectedElement('#modal-edit .modal-content')
                    }
                })
            }
        })
    }

    const submitDelete = (TOKEN, table) => {
        let form = $('.form-delete')

        form.on('submit', function (e) {
            let id = $('#delete_id').val()
            e.preventDefault()

            $.ajax({
                url: `${SET.apiURL()}user/${id}`,
                method: 'DELETE',
                dataType: 'JSON',
                data: $(this).serialize(),
                beforeSend: xhr => {
                    xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)

                    SET.contentLoader('#modal-delete .modal-content');
                },
                success: res => {
                    table.ajax.reload()
                    $('#modal-delete').modal('hide')
                    toastr.success(res.message, 'Berhasil')
                },
                error: err => {
                    toastr.error(err.error, 'Gagal')
                },
                complete: () => {
                    SET.closeSelectedElement('#modal-delete .modal-content')
                }
            })
        })
    }

    const openEdit = () => {
        let table = $('#t_user')

        table.on('click', '.btn-edit', function () {
            let id = $(this).data('id');
            let nama_lengkap = $(this).data('name');
            let username = $(this).data('username');
            let level = $(this).data('level');
            let active = $(this).data('active');

            $('.form-edit')[0].reset();
            $('#edit_id_user').val(id)
            $('#edit_nama_lengkap').val(nama_lengkap)
            $('#edit_username').val(username)
            $('#edit_level').val(level)
            $('#edit_aktif').val(active)

            $('#modal-edit').modal('show');
        })
    }

    const openDelete = () => {
        let table = $('#t_user')

        table.on('click', '.btn-delete', function () {
            let id = $(this).data('id');
            let name = $(this).data('name');

            $('#delete_id').val(id)
            $('#delete_name').text(name)

            $('#modal-delete').modal('show');
        })
    }

    const reloadTable = table => {
        let btn = $('.btn-reload')

        btn.on('click', function () {
            table.ajax.reload();
        })
    }

    const initializePlugin = (proses, terima, tolak) => {
        const PROGRESS_CHART = new Chart(document.getElementById('progressChart').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Proses', 'Terima', 'Tolak'],
                datasets: [{
                    data: [proses, terima, tolak],
                    backgroundColor: [
                        "yellow",
                        "green",
                        "red",
                    ]
                }],
            },

            options: {
                legend: {
                    display: true,
                },
                responsive: true,
                tooltips: {
                    enabled: true,
                }
            }
        });

        $('#report_container').on('click', '#btn_print', function () {
            let chart = document.getElementById('progressChart').toDataURL()
            $('#print_area #chart_container').html(`<img src="${chart}">`)
            
            var mode = 'iframe'; //popup
            var close = mode == "popup";
            var options = {
                mode: mode,
                popClose: close
            };

            $('#print_area').printArea(options);
        })
    }

    const _submitLaporan = () => {
        $('#form_report').on('submit', function (e) {
            e.preventDefault()
        }).validate({
            rules: {
                bulan: 'required',
                tahun: 'required'
            },
            submitHandler: form => {
                let periode = {
                    bulan: $('#bulan').val(),
                    tahun: $('#tahun').val()
                }

                $.ajax({
                    url: `${SET.apiURL()}aplikasi?bulan=${periode.bulan}&tahun=${periode.tahun}`,
                    method: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        $('#report_container').html('<div class="text-center"><h4>Loading...</h4></div>')
                    },
                    success: res => {
                        UI.renderLaporanView(res.results, periode, initializePlugin)
                    },
                    error: err => {
                        toastr.error(err.error, 'Gagal')
                    },
                })
            }
        })
    }

    return {
        dashboard: USER => {

            const PERFORMANCE_CHART = new Chart(document.getElementById('performanceChart').getContext('2d'), {
                type: 'line',
                data: {
                    labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                    ],
                    datasets: [{
                        label: 'Aplikasi',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        borderColor: "rgba(0, 176, 228, 0.75)",
                        backgroundColor: "transparent",
                        pointBorderColor: "rgba(0, 176, 228, 0)",
                        pointBackgroundColor: "rgba(0, 176, 228, 0.9)",
                        pointBorderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    legend: {
                        display: true,
                    },
                },
            });

            const PROGRESS_CHART = new Chart(document.getElementById('progressChart').getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Proses', 'Terima', 'Tolak'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: [
                            "yellow",
                            "green",
                            "red",
                        ]
                    }],
                },

                options: {
                    legend: {
                        display: true,
                    },
                    responsive: true,
                    tooltips: {
                        enabled: true,
                    }
                }
            });

            _fetchAllAplikasi(data => {
                let proses = data.filter(v => v.status === 'Proses').length;
                let terima = data.filter(v => v.status === 'Terima').length;
                let tolak = data.filter(v => v.status === 'Tolak').length;
                
                $('.count_aplikasi').text(data.length)
                PROGRESS_CHART.data.datasets[0].data = [proses, terima, tolak]
                PROGRESS_CHART.update()

            })

            _fetchPerformanceAnalytic(USER.api_token, data => {
                PERFORMANCE_CHART.data.datasets[0].data = data.aplikasi.total
                PERFORMANCE_CHART.update()
            })
        },

        user: USER => {
            const t_user = $('#t_user').DataTable({
                columnDefs: [
                    {
                        targets: [3],
                        searchable: false
                    },
                    {
                        targets: [3],
                        orderable: false
                    }
                ],
                autoWidth: true,
                processing: true,
                responsive: false,
                scrollX: true,
                scrollY: 300,
                ajax: {
                    url: `${SET.apiURL()}user`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        xhr.setRequestHeader("Authorization", "Bearer " + USER.api_token)
                    },
                    dataSrc: res => {
                        let active = res.results.filter(v => v.active === 'Y').length;
                        let inactive = res.results.filter(v => v.active === 'T').length;

                        $('#count_active').text(active)
                        $('#count_inactive').text(inactive)

                        return res.results
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "nama_lengkap",
                        render: (data, type, row) => {
                            return `
                                    ${row.nama_lengkap} 
                                    <br/>
                                    Username : ${row.username}
                            `
                        }
                    },
                    {
                        data: "aktif",
                        render: (data, type, row) => {
                            if (row.active === 'Y') {
                                return `<span class="label label-success">Aktif</span> `
                            } else {
                                return `<span class="label label-danger">Tidak Aktif</span>`
                            }
                        }
                    },
                    {
                        data: "level"
                    },
                    {
                        data: "id_user",
                        render: (data, type, row) => {
                            return `
                                <div class="text-center">
                                    <div class="btn-group">
                                        <a class="btn btn-success btn-edit" role="button" data-id="${row.id}"  data-name="${row.nama_lengkap}" data-username="${row.username}"  data-level="${row.level}"  data-active="${row.active}"><i class="fa fa-pencil"></i></a>
                                        <a class="btn btn-danger btn-delete" role="button" data-id="${row.id}" data-name="${row.nama_lengkap}"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            `
                        }
                    }
                ],
                order: [[0, "desc"]]
            });

            reloadTable(t_user)

            openAdd()
            openEdit()
            openDelete()

            submitAdd(USER.api_token, t_user)
            submitEdit(USER.api_token, t_user)
            submitDelete(USER.api_token, t_user)
        },

        aplikasi: () => {
            const table = $('#t_aplikasi').DataTable({
                ajax: {
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        // xhr.setRequestHeader("Content-Type", 'application/json')
                        // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let aplikasi = res.results.filter(v => v.status === 'Proses' && v.verifikasi === null);
                        $('#count_aplikasi').text(aplikasi.length)

                        return aplikasi
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/aplikasi/${row.id}">${row.no_aplikasi}</a>
                            `;
                        }
                    },
                    {
                        data: "tgl_aplikasi",
                    },
                    {
                        data: "pemohon.nama_lengkap",
                    },
                    {
                        data: "limit_kredit",
                        render: function (data, type, row) {
                            return `
                                Rp. ${SET.positiveCurrency(row.limit_kredit)}
                            `;
                        }
                    },
                    {
                        data: "jangka_waktu",
                        render: function (data, type, row) {
                            return `
                                ${SET.positiveNumber(row.jangka_waktu)} Bulan
                            `;
                        }
                    },
                ],
                order: [[1, "desc"]]
            })


        },

        verifikasi: () => {
            const table = $('#t_aplikasi').DataTable({
                ajax: {
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        // xhr.setRequestHeader("Content-Type", 'application/json')
                        // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let aplikasi = res.results.filter(v => v.status === 'Proses' && v.verifikasi !== null && v.survey === null && v.approval === null);
                        $('#count_aplikasi').text(aplikasi.length)

                        return aplikasi
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/aplikasi/${row.id}">${row.no_aplikasi}</a>
                            `;
                        }
                    },
                    {
                        data: "tgl_aplikasi",
                    },
                    {
                        data: "pemohon.nama_lengkap",
                    },
                    {
                        data: "limit_kredit",
                        render: function (data, type, row) {
                            return `
                                Rp. ${SET.positiveCurrency(row.limit_kredit)}
                            `;
                        }
                    },
                    {
                        data: "jangka_waktu",
                        render: function (data, type, row) {
                            return `
                                ${SET.positiveNumber(row.jangka_waktu)} Bulan
                            `;
                        }
                    },
                    {
                        data: "verifikasi",
                        render: function (data, type, row) {
                            return `
                                <a href="#/verifikasi/${row.verifikasi.id}">${row.verifikasi.no_verifikasi}</a>
                            `;
                        }
                    },
                ],
                order: [[1, "desc"]]
            })

        },

        survey: () => {
            const table = $('#t_aplikasi').DataTable({
                ajax: {
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        // xhr.setRequestHeader("Content-Type", 'application/json')
                        // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let aplikasi = res.results.filter(v => v.status === 'Proses' && v.verifikasi !== null && v.survey !== null && v.approval === null);
                        $('#count_aplikasi').text(aplikasi.length)

                        return aplikasi
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/aplikasi/${row.id}">${row.no_aplikasi}</a>
                            `;
                        }
                    },
                    {
                        data: "tgl_aplikasi",
                    },
                    {
                        data: "pemohon.nama_lengkap",
                    },
                    {
                        data: "limit_kredit",
                        render: function (data, type, row) {
                            return `
                                Rp. ${SET.positiveCurrency(row.limit_kredit)}
                            `;
                        }
                    },
                    {
                        data: "jangka_waktu",
                        render: function (data, type, row) {
                            return `
                                ${SET.positiveNumber(row.jangka_waktu)} Bulan
                            `;
                        }
                    },
                    {
                        data: "survey",
                        render: function (data, type, row) {
                            return `
                                <a href="#/survey/${row.survey.id}">${row.survey.no_survey}</a>
                            `;
                        }
                    },
                ],
                order: [[1, "desc"]]
            })

        },

        approval: () => {
            const table = $('#t_aplikasi').DataTable({
                ajax: {
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        // xhr.setRequestHeader("Content-Type", 'application/json')
                        // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let aplikasi = res.results.filter(v => v.status === 'Terima' && v.verifikasi !== null && v.survey !== null && v.approval !== null);
                        $('#count_aplikasi').text(aplikasi.length)

                        return aplikasi
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/aplikasi/${row.id}">${row.no_aplikasi}</a>
                            `;
                        }
                    },
                    {
                        data: "tgl_aplikasi",
                    },
                    {
                        data: "pemohon.nama_lengkap",
                    },
                    {
                        data: "limit_kredit",
                        render: function (data, type, row) {
                            return `
                                Rp. ${SET.positiveCurrency(row.limit_kredit)}
                            `;
                        }
                    },
                    {
                        data: "jangka_waktu",
                        render: function (data, type, row) {
                            return `
                                ${SET.positiveNumber(row.jangka_waktu)} Bulan
                            `;
                        }
                    },
                    {
                        data: "approval",
                        render: function (data, type, row) {
                            return `
                                <a href="#/approval/${row.approval.id}">${row.approval.no_approval}</a>
                            `;
                        }
                    },
                ],
                order: [[1, "desc"]]
            })

        },

        ditolak: () => {
            const table = $('#t_aplikasi').DataTable({
                ajax: {
                    url: `${SET.apiURL()}aplikasi`,
                    type: 'GET',
                    dataType: 'JSON',
                    beforeSend: xhr => {
                        // xhr.setRequestHeader("Content-Type", 'application/json')
                        // xhr.setRequestHeader("Authorization", "Bearer " + TOKEN)
                    },
                    dataSrc: res => {
                        let aplikasi = res.results.filter(v => v.status === 'Tolak');
                        $('#count_aplikasi').text(aplikasi.length)

                        return aplikasi
                    },
                    statusCode: {
                        401: err => {
                            let error = err.responseJSON

                            if (error.message === 'Unauthenticated.') {
                                $('#app_content').load(`${SET.baseURL()}unauthenticated`)
                            }

                            if (error.message === 'Unauthorized.') {
                                $('#app_content').load(`${SET.baseURL()}unauthorized`)
                            }
                        }
                    },
                    error: err => {

                    }
                },
                columns: [
                    {
                        data: "id",
                        render: function (data, type, row) {
                            return `
                                <a href="#/aplikasi/${row.id}">${row.no_aplikasi}</a>
                            `;
                        }
                    },
                    {
                        data: "tgl_aplikasi",
                    },
                    {
                        data: "pemohon.nama_lengkap",
                    },
                    {
                        data: "limit_kredit",
                        render: function (data, type, row) {
                            return `
                                Rp. ${SET.positiveCurrency(row.limit_kredit)}
                            `;
                        }
                    },
                    {
                        data: "jangka_waktu",
                        render: function (data, type, row) {
                            return `
                                ${SET.positiveNumber(row.jangka_waktu)} Bulan
                            `;
                        }
                    },
                    {
                        data: "keterangan",
                    },
                ],
                order: [[1, "desc"]]
            })

        },

        detail: (USER, id) => {
            _fetchAplikasi(id, data => {
                _detailObserver(USER, id, data)
                UI.renderDetail(data, USER)
            })

            _printAll()
        },

        detailVerifikasi: (USER, id) => {
            _fetchVerifikasi(USER.api_token, id, data => {
                UI.renderDetailVerifikasi(data)
                _printAll()
            })

        },

        detailSurvey: (USER, id) => {
            _fetchSurvey(USER.api_token, id, data => {
                UI.renderDetailSurvey(data)
            })

            _printAll()
        },

        detailApproval: (USER, id) => {
            _fetchApproval(USER.api_token, id, data => {
                UI.renderDetailApproval(data)
            })

            _printAll()
        },

        laporan: () => {
            _submitLaporan()
        },
    }
})(settingController, dtController, appUI, lookupController)
