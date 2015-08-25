Smalltalk createPackage: 'Timer'!
(Smalltalk packageAt: 'Timer') imports: {'ko' -> 'knockout'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'sevenSeg'. 'silk/Silk'}!
Object subclass: #Timer
	instanceVariableNames: 'timerProcess viewModel'
	package: 'Timer'!

!Timer methodsFor: 'accessing'!

ko

	^ko
!

timerProcess
	^ timerProcess
!

timerProcess: anObject
	timerProcess := anObject
!

viewModel
	viewModel ifNil: [self viewModel: #{}].
	^ viewModel
!

viewModel: anObject
	viewModel := anObject
! !

!Timer methodsFor: 'action'!

alertFinish
	
	self wantsAlert ifTrue: [
				Terminal alert: 'Finish !!']
!

decrementCounter
	
	self counter: self counter - 1
!

doAction

	self isRunning
		ifTrue: [self stopTimerProcess.
			'#start' asJQuery text: 'START'.]
		ifFalse: [self setupCounter.
			self setupTimerProcess.
			'#start' asJQuery text: 'STOP'.].
!

doStart

	self setupCounter.
	self setupTimerProcess.
	'#start' asJQuery text: 'STOP'.
	'#start' asJQuery click: [self doStop]
!

doStop

	self stopTimerProcess.
	'#start' asJQuery text: 'START'.
	'#start' asJQuery click: [self doStart]
!

isRunning

	^self timerProcess notNil
!

setupCounter

	self counter: self selectedTimer * 60.
!

setupTimerProcess

	self timerProcess ifNil: [
		self timerProcess: ([self timerAction] valueWithInterval: 1000).]
!

stopTimerProcess

	self timerProcess ifNotNil: [
		self timerProcess clearInterval.
		self timerProcess: nil].
!

timerAction
	
	self counter < 1
		ifTrue: [self doAction.
				Terminal alert: 'Finish !!']
		ifFalse: [self decrementCounter]
! !

!Timer methodsFor: 'initialization'!

initialize

	| selected | 
	super initialize. 
	

	timerProcess := nil.
!

setupModel

	| selected | 
	selected := (ko observable: 25) .
	viewModel := #{}.
	viewModel addAll: 
		#{
			#availableTimers -> (ko observableArray: #(5 10 25)) .
			#selectedTimer -> selected .
			#counter -> (ko observable: selected value * 60) .
			#wantsAlert -> (ko observable: true)
		}.
	ko applyBindings: viewModel
!

sevenSegHandler

	^#{
		#init -> [:element :valueAccessor :allBindingAccesso :model :bindingContex |
					| bindingValue |
					bindingValue := valueAccessor value.
					element asJQuery sevenSeg: (ko toJS: bindingValue)] .
		#update -> [:element :valueAccessor :allBindingAccesso :model :bindingContex |
			element asJQuery sevenSeg: (ko toJS: valueAccessor value)]
	}
! !

!Timer methodsFor: 'model accessing'!

counter
	^ (self viewModel at: #counter) value
!

counter: anObject

	(self viewModel at: #counter) value: anObject
!

selectedTimer

	^ (self viewModel at: #selectedTimer ) value
!

wantsAlert

	^ (self viewModel at: #wantsAlert) value
! !

!Timer methodsFor: 'starting'!

augmentPage

	'#start' asJQuery click: [self doAction].
	'body' asJQuery append: 
		'<div class="exampleContainer">
			<div data-bind="sevenSeg: { digits: 5, value: counter }" class="big-sevenSeg" style="width: 420px;"></div>
		</div>'.

	ko bindingHandlers at: #sevenSeg put: self sevenSegHandler.

	self setupModel
! !

!Timer class methodsFor: 'starting'!

start
	self new augmentPage
! !

