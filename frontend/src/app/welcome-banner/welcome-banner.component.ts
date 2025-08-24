/*
 * Copyright (c) 2014-2025 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { Component, type OnInit } from '@angular/core'
import { ConfigurationService } from '../Services/configuration.service'
import { MatDialogRef } from '@angular/material/dialog'
import { CookieService } from 'ngy-cookie'
import { TranslateModule } from '@ngx-translate/core'
import { ExtendedModule } from '@angular/flex-layout/extended'
import { MatIconModule } from '@angular/material/icon'
import { MatTooltip } from '@angular/material/tooltip'
import { MatButtonModule } from '@angular/material/button'
import { NgIf } from '@angular/common'

@Component({
  selector: 'app-welcome-banner',
  templateUrl: 'welcome-banner.component.html',
  styleUrls: ['./welcome-banner.component.scss'],
  imports: [NgIf, MatButtonModule, MatTooltip, MatIconModule, ExtendedModule, TranslateModule]
})
export class WelcomeBannerComponent implements OnInit {
  public title: string = 'Welcome to OWASP Juice Shop'
public message: string = "<p>The <strong>Custom Juice Shop</strong> is an interactive web application designed for <strong>tech enthusiasts</strong> who want to explore modern web technologies and learn about application security in a hands-on way.</p>\
<p>This platform allows you to:</p>\
<ul>\
  <li><strong>Test and explore UI features:</strong> Interact with buttons, forms, menus; validate navigation, login, registration, and responsiveness.</li>\
  <li><strong>Experiment with APIs:</strong> Observe request/response flows, check status codes, JSON structure, errors; automate tests using <strong>Rest Assured</strong> or Postman.</li>\
  <li><strong>Learn about security:</strong> Explore vulnerabilities such as SQL Injection, XSS, CSRF, authentication/authorization flaws, sensitive data exposure, and session management.</li>\
  <li><strong>OWASP vulnerability demos:</strong> Experience real-world security issues inspired by the <a href='https://owasp.org' target='_blank'>OWASP Juice Shop</a> project.</li>\
</ul>\
<p>All references and credit go to the original <a href='https://owasp.org' target='_blank'>OWASP Juice Shop</a> project. For more details, documentation, and other technology projects, visit my portfolio at <a href='https://www.amitsangwan.com' target='_blank'>www.amitsangwan.com</a>.</p>\
<h2>Explore the Original OWASP Project:</h2>\
<h3><a href='https://owasp-juice.shop' target='_blank'>https://owasp-juice.shop</a></h3>";

  public showHackingInstructor: boolean = true
  public showDismissBtn: boolean = true

  private readonly welcomeBannerStatusCookieKey = 'welcomebanner_status'

  constructor (
    public dialogRef: MatDialogRef<WelcomeBannerComponent>,
    private readonly configurationService: ConfigurationService,
    private readonly cookieService: CookieService) { }

  ngOnInit (): void {
    this.configurationService.getApplicationConfiguration().subscribe((config) => {
      if (config?.application?.welcomeBanner) {
        this.title = config.application.welcomeBanner.title
        this.message = config.application.welcomeBanner.message
      }
      this.showHackingInstructor = config?.hackingInstructor?.isEnabled
      // Don't allow to skip the tutorials when restrictToTutorialsFirst and showHackingInstructor are enabled
      if (this.showHackingInstructor && config?.challenges?.restrictToTutorialsFirst) {
        this.dialogRef.disableClose = true
        this.showDismissBtn = false
      }
    }, (err) => { console.log(err) })
  }

  startHackingInstructor () {
    this.closeWelcome()
    console.log('Starting instructions for challenge "Score Board"')
    import(/* webpackChunkName: "tutorial" */ '../../hacking-instructor').then(module => {
      module.startHackingInstructorFor('Score Board')
    })
  }

  closeWelcome (): void {
    this.dialogRef.close()
    const expires = new Date()
    expires.setFullYear(expires.getFullYear() + 1)
    this.cookieService.put(this.welcomeBannerStatusCookieKey, 'dismiss', { expires })
  }
}
