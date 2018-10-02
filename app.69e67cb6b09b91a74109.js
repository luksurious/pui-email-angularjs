!function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=7)}([function(e,t){e.exports=angular},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),r=i(a),o=n(15),l=i(o),d={controller:r.default,controllerAs:"ctrl",template:l.default,parent:angular.element(document.body),clickOutsideToClose:!0};t.default=d},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(16),r=i(a),o=n(9),l=i(o);n(13);var d=function(){return{template:r.default,scope:{emailId:"<"},controller:l.default,controllerAs:"ctrl"}};t.default=d},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),r=i(a),o=n(11),l=i(o);n(14);var d=function(){return{template:r.default,controller:l.default,controllerAs:"ctrl"}};t.default=d},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(12),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(){i(this,e),this.highestId=Object.values(o.default).reduce(function(e,t){return t.id>e?t.id:e},0)}return a(e,[{key:"getAllEmails",value:function(){return o.default}},{key:"getEmailById",value:function(e){if(o.default[e])return o.default[e];console.error("No email found with id "+e)}},{key:"deleteEmail",value:function(e){if(o.default[e])return void delete o.default[e];console.error("No email found with id "+e)}},{key:"addEmail",value:function(e,t,n,i,a){var r=this.highestId+1;o.default[r]={id:r,to:e,from:t,subject:n,date:i,body:a},this.highestId=r}}]),e}();t.default=l},function(e,t){},function(e,t){e.exports='<md-toolbar layout="row" class="md-toolbar-tools">\n    <h1 class="md-headline">Simple Email Viewer</h1>\n</md-toolbar>\n\n<md-content layout-padding layout="row" layout-align="center top">\n    <div id="content" flex>\n        <overview></overview>\n    </div>\n</md-content>\n'},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=i(a);n(0),n(0),n(5);var o=n(4),l=i(o),d=n(3),s=i(d),u=n(2),c=i(u),m=n(1),f=i(m),h=function(){return{template:n(6)}};r.default.module("app",["ngMaterial","ngMessages"]).directive("app",h).service("dataservice",l.default),r.default.module("app").constant("addModal",f.default).directive("overview",s.default).directive("emailDetails",c.default),t.default="app"},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,n){i(this,e),this.$mdDialog=t,this.dataservice=n}return a(e,[{key:"$onInit",value:function(){this.email={}}},{key:"close",value:function(){this.$mdDialog.hide()}},{key:"addMail",value:function(){this.addMailForm.$invalid||(this.dataservice.addEmail(this.email.to,this.email.from,this.email.subject,this.email.date,this.email.body),this.email={},this.addMailForm.$setPristine(),this.addMailForm.$setUntouched(),this.close())}}]),e}();r.$inject=["$mdDialog","dataservice"],t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(t,n){i(this,e),this.dataservice=t,this.emailId=n.emailId}return a(e,[{key:"$onInit",value:function(){this.email=this.dataservice.getEmailById(this.emailId)}}]),e}();r.$inject=["dataservice","$scope"],t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={dateAsc:{id:"dateAsc",title:"Date asc.",comparison:"+date"},dateDesc:{id:"dateDesc",title:"Date desc.",comparison:"-date"},subjectAsc:{id:"subjectAsc",title:"Subject asc.",comparison:"+subject"},subjectDesc:{id:"subjectDesc",title:"Subject desc.",comparison:"-subject"},fromAsc:{id:"fromAsc",title:"From asc.",comparison:"+from"},fromDesc:{id:"fromDesc",title:"From desc.",comparison:"-from"}};t.default=i},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(10),o=function(e){return e&&e.__esModule?e:{default:e}}(r),l=function(){function e(t,n,a){i(this,e),this.dataservice=t,this.$mdDialog=a,this.addModal=n}return a(e,[{key:"$onInit",value:function(){this.emails=[],this.filteredEmails=[],this.detailEmail=-1,this.currentOrderBy=o.default.dateDesc,this.orderByOptions=o.default,this.searchText="",this.showAddDialog=!1,this.loadEmails()}},{key:"deleteEmail",value:function(e){this.dataservice.deleteEmail(e),this.loadEmails()}},{key:"viewEmail",value:function(e){this.detailEmail==e?this.detailEmail=-1:this.detailEmail=e}},{key:"openAddDialog",value:function(){var e=this;this.$mdDialog.show(this.addModal).then(function(){return e.loadEmails()}).catch(function(e){})}},{key:"loadEmails",value:function(){this.emails=Object.values(this.dataservice.getAllEmails())}}]),e}();l.$inject=["dataservice","addModal","$mdDialog"],t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={1:{id:1,from:"ALUMNI-Info <info@alumni.abc.edu>",to:"lukas@test.com",subject:"KIT-Alumni Newsletter September 2018",body:"One hundred dollars.\nFry, you can't just sit here in the dark listening to classical music. And when we woke up, we had these bodies. I was having the most wonderful dream. Except you were there, and you were there, and you were there!\n        \nNo, she'll probably make me do it. Who am I making this out to? Yep, I remember. They came in last at the Olympics, then retired to promote alcoholic beverages! Bender, quit destroying the universe! That's right, baby. I ain't your loverboy Flexo, the guy you love so much. You even love anyone pretending to be him!",date:new Date("2018-09-01 15:55")},2:{id:2,from:"Freeletics <instructors@mails.freeletics.com>",to:"lukas@test.com",subject:"10 Wege, um produktiver zu werden",body:"It's a hug, Michael. I'm hugging you.\nMichael! I'm afraid I just blue myself. Guy's a pro. I'm half machine. I'm a monster. No! I was ashamed to be SEEN with you. I like being with you.\n\nNo! I was ashamed to be SEEN with you. I like being with you.\nArmy had half a day.\nBut I bought a yearbook ad from you, doesn't that mean anything anymore?",date:new Date("2018-09-04 15:55")},3:{id:3,from:"UX Movement <news@uxmovement.com>",to:"lukas@test.com",subject:"New UX Article",body:"Newest Articles\nWhy You Should Never Center or Right Align Your Logo\nMany designers assume that center or right aligning their website logo will make their brand more memorable. Research has shown this assumption is not true at all.\n\nThe Best Place for Error Messages on Forms\nWhere are you placing the error messages on your form? If they’re not placed where users expect to see them, you could jeopardize their capability to complete your form.",date:new Date("2018-09-20 15:55")}};t.default=i},function(e,t){},function(e,t){},function(e,t){e.exports='<md-dialog aria-label="Add a new email">\n    <form name="ctrl.addMailForm" ng-cloak ng-submit="ctrl.addMail()">\n        <md-toolbar>\n            <div class="md-toolbar-tools">\n                <h2>Add a new email</h2>\n                <span flex></span>\n                <md-button class="md-icon-button" ng-click="ctrl.close()">\n                    <md-icon aria-label="Close dialog">close</md-icon>\n                </md-button>\n            </div>\n        </md-toolbar>\n\n        <md-dialog-content>\n            <div class="md-dialog-content">\n                <div layout="row">\n                    <md-input-container class="md-block">\n                        <label>From</label>\n                        <input ng-model="ctrl.email.from" type="email" required name="from">\n                        <div ng-messages="ctrl.addMailForm.from.$error">\n                            <div ng-message="required">This is required.</div>\n                            <div ng-message="email">The input is not a valid email format.</div>\n                        </div>\n                    </md-input-container>\n\n                    <md-input-container class="md-block">\n                        <label>To</label>\n                        <input ng-model="ctrl.email.to" type="email" required name="to">\n                        <div ng-messages="ctrl.addMailForm.to.$error">\n                            <div ng-message="required">This is required.</div>\n                            <div ng-message="email">The input is not a valid email format.</div>\n                        </div>\n                    </md-input-container>\n\n                    <md-input-container class="md-block">\n                        <label>Date</label>\n                        <md-datepicker ng-model="ctrl.email.date" required name="date"></md-datepicker>\n                        <div ng-messages="ctrl.addMailForm.date.$error">\n                            <div ng-message="required">This is required.</div>\n                        </div>\n                    </md-input-container>\n                </div>\n                <md-input-container class="md-block">\n                    <label>Subject</label>\n                    <input ng-model="ctrl.email.subject" required name="subject">\n                    <div ng-messages="ctrl.addMailForm.subject.$error">\n                        <div ng-message="required">This is required.</div>\n                    </div>\n                </md-input-container>\n\n                <md-input-container class="md-block">\n                    <label>Body</label>\n                    <textarea ng-model="ctrl.email.body" rows="5" required name="body"></textarea>\n                    <div ng-messages="ctrl.addMailForm.body.$error">\n                        <div ng-message="required">This is required.</div>\n                    </div>\n                </md-input-container>\n            </div>\n        </md-dialog-content>\n\n        <md-dialog-actions layout="row">\n            <span flex></span>\n            <md-button class="md-raised md-primary" ng-disabled="ctrl.addMailForm.$invalid" type="submit">\n                Add Email\n            </md-button>\n        </md-dialog-actions>\n    </form>\n</md-dialog>'},function(e,t){e.exports='<p class="email-item__body md-body-1">{{:: ctrl.email.body}}</p>\n'},function(e,t){e.exports='<h2 class="md-display-1">Inbox</h2>\n\n<md-card>\n    <md-card-content>\n        <div layout="row" class="inbox-actions__container">\n            <div flex layout-align="start center" layout="row">\n                <md-button class="md-primary md-raised" ng-click="ctrl.openAddDialog()">Add email</md-button>\n            </div>\n            <div flex layout="row" layout-align="end bottom">\n                <md-input-container>\n                    <label>Filter</label>\n                    <md-icon>search</md-icon>\n                    <input type="text" ng-model="ctrl.searchText">\n                </md-input-container>\n                <md-input-container>\n                    <label>Order by</label>\n                    <md-select ng-model="ctrl.currentOrderBy" ng-model-options="{trackBy: \'$value.id\'}">\n                        <md-option ng-value="orderBy" ng-repeat="orderBy in ctrl.orderByOptions">{{:: orderBy.title }}</md-option>\n                    </md-select>\n                </md-input-container>\n            </div>\n        </div>\n        <md-list flex ng-show="ctrl.emails.length > 0">\n            <div ng-repeat="email in ctrl.filteredEmails = (ctrl.emails | filter:ctrl.searchText) | orderBy:ctrl.currentOrderBy.comparison">\n                <md-list-item class="md-3-line" ng-click="ctrl.viewEmail(email.id)">\n                    <div class="md-avatar email-item__avatar">{{:: email.from | limitTo:1 }}</div>\n                    <div class="md-list-item-text" layout="column">\n                        <h3>\n                            {{:: email.subject }}\n                        </h3>\n                        <h4>\n                            {{:: email.from }}\n                        </h4>\n                        <p>\n                            {{:: email.date | date: \'medium\' }}\n                        </p>\n                    </div>\n                    <md-button class="md-primary" ng-click="ctrl.viewEmail(email.id)">{{ ctrl.detailEmail == email.id ? \'Close\' : \'View\'}}</md-button>\n                    <md-button class="md-secondary" ng-click="ctrl.deleteEmail(email.id)">Delete</md-button>\n                </md-list-item>\n                <email-details ng-show="ctrl.detailEmail == email.id" email-id="email.id"></email-details>\n                <md-divider ng-if="!$last"></md-divider>\n            </div>\n        </md-list>\n        <div ng-show="ctrl.filteredEmails.length == 0 && ctrl.emails.length > 0">\n            <p>Your search returned no results</p>\n        </div>\n        <div ng-show="ctrl.emails.length == 0">\n            <p>Your inbox is empty!</p>\n        </div>\n    </md-card-content>\n</md-card>'}]);