import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-bodyform',
  templateUrl: './bodyform.component.html',
  styleUrls: ['./bodyform.component.css']

})
export class BodyformComponent implements OnInit {
  nim = '';
  nama = '';
  kelas = '';
  daftarMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new Mahasiswa(this.nim, this.nama, this.kelas);
    this.daftarMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}
