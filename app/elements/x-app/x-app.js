Polymer({

  is: 'x-app',

  properties: {

    _isMobile: {
      type: Boolean,
      observer: '_isMobileChanged'
    }

  },

  _listTap: function() {
    this.$.drawerPanel.closeDrawer();
  },

  _isMobileChanged: function(isMobile) {
    this.mainMode = isMobile ? 'seamed' : 'cover';
    this.drawerWidth = isMobile ? '100%' : '320px';
    this.toolbarClass = isMobile ? '' : 'tall';
    this.updateStyles();
  }

});
