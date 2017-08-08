import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  teams: Array<string>;
  members: any[] = [];
  memberForm: any;

  constructor(private formBuider: FormBuilder) {
    this.teams = ['Ruby', 'Fe', 'PHP'];
    this.memberForm = this.formBuider.group({
      personal: new FormGroup({
        fullname: new FormControl('', [Validators.required]),
        birthday: new FormControl(''),
        avatar: new FormControl('')
      }),
      company: new FormGroup({
        joined: new FormControl('', Validators.required),
        team: new FormControl('', Validators.required),
      }),
      skill: new FormControl()
    })
  }

  ngOnInit() {
    this.memberForm.controls.company.controls.team.valueChanges.subscribe(
      (value: string) => {
        switch (value) {
          case "Ruby":
            this.memberForm.setControl('skill', new FormControl('', [Validators.required, this.checkSkillRuby]));
            break;

          case "PHP":
            this.memberForm.setControl('skill', new FormControl('', [Validators.required, this.checkSkillPhp]));
            break;

          default:
            this.memberForm.setControl('skill', new FormControl('', [Validators.required, this.checkSkillFe]));
            break;
        }
        console.log(value);
      }
    );
  }

  checkSkillRuby = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'Ruby'.toLocaleLowerCase());
  }

  checkSkillFe = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'Fe'.toLocaleLowerCase());
  }

  checkSkillPhp = (input: FormControl) => {
    return this.checkSkillsByTeam(input, 'PHP'.toLocaleLowerCase())
  }

  checkSkillsByTeam(input: FormControl, prerequisite: string) {
    const ind = input.value.indexOf(prerequisite) < 0;
    return ind ? { skillInvalid: true } : null
  }

  addMember = () => {
    this.members.push(this.memberForm.value);
    console.log(this.memberForm.value);
  }
}