Javaskryptonite
===============

Information and code-samples addressing JavaScript code quality and developer tests.

This repository provides code samples supporting the Javaskryptonite presentation originally given at the Dallas Day of .NET by Ryan Clay and John Gully.  The "intial" state represents the baseline code that is used to build the testing samples upon.  The "final" state represents the code after all changes have been made.

Getting Started
===============
There are two ways you may wish to use this code. The first is to simply use the "Final" state as a refrence.  The second is to begin the "Initial" state and work toward the "Final" state in a tutorial fashion.  The supporting documentation that will allow you to work as a tutorial is not yet available.  We will post this inforamtion as soon as it is ready for puplic consumption.

Helpful information
===================
* **Chutzpah** - Install both the Chutzpah Test Adapter and the Chutzpah Test Runner using the Visual Studio Extensions & Updates manager (Tool/Extensions and Updates).
* **Jasmine Test Framework** - This nuget package is used to include Jasime in the application.  This package was used for convenience, and the core jasmine javascript is all that is really required.
* **Known Failing Test** - The GamePresenter test is in a failing state when run throught the Chutzpah plugin.  If the test is run in the browser, it will pass without problem.  This appears to be related to the use of ".bind(this)", but we have not spent the time to track down and resolve the issue.
