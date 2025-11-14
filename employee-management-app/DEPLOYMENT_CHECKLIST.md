# Deployment Checklist

Checklist untuk deploy aplikasi ke production.

## Pre-Deployment

### 1. Testing
- [ ] Test login dengan credentials yang benar
- [ ] Test login dengan credentials yang salah
- [ ] Test navigasi ke semua menu
- [ ] Test tambah karyawan baru
- [ ] Test validasi form (field kosong)
- [ ] Test upload foto dari kamera
- [ ] Test upload foto dari galeri
- [ ] Test edit karyawan existing
- [ ] Test hapus karyawan
- [ ] Test pull to refresh
- [ ] Test dengan data banyak (>50 karyawan)
- [ ] Test logout
- [ ] Test di Android device
- [ ] Test di iOS device (jika ada)

### 2. Code Review
- [ ] Review semua screen components
- [ ] Check error handling
- [ ] Check data validation
- [ ] Review database operations
- [ ] Check memory leaks
- [ ] Review navigation flow

### 3. Configuration
- [ ] Update app.json dengan bundle ID yang benar
- [ ] Set app version
- [ ] Set app display name
- [ ] Configure app icons
- [ ] Configure splash screen
- [ ] Set permissions (camera, storage)

### 4. Documentation
- [ ] Update README.md
- [ ] Complete API documentation (jika ada)
- [ ] User manual
- [ ] Known issues documented

## Build Preparation

### Android

#### EAS Build
```bash
# 1. Install EAS CLI
npm install -g eas-cli

# 2. Login
eas login

# 3. Configure EAS
eas build:configure

# 4. Build APK (preview)
eas build --platform android --profile preview

# 5. Build AAB (production)
eas build --platform android --profile production
```

#### Checklist Android
- [ ] EAS account created
- [ ] Project configured in eas.json
- [ ] Build type selected (APK/AAB)
- [ ] Android package name unique
- [ ] Signing key generated (for AAB)
- [ ] Version code incremented
- [ ] Version name updated

### iOS

#### EAS Build
```bash
# 1. Build iOS
eas build --platform ios --profile production
```

#### Checklist iOS
- [ ] Apple Developer account
- [ ] Bundle ID registered
- [ ] Provisioning profile
- [ ] Distribution certificate
- [ ] App Store Connect setup
- [ ] Version number updated
- [ ] Build number incremented

## Post-Build

### 1. APK/IPA Testing
- [ ] Download build from EAS
- [ ] Install on real device
- [ ] Test all critical features
- [ ] Test on different screen sizes
- [ ] Test on different OS versions
- [ ] Performance testing
- [ ] Battery usage testing

### 2. Store Preparation

#### Google Play Store
- [ ] Create app listing
- [ ] Upload screenshots
- [ ] Write app description
- [ ] Set category
- [ ] Set content rating
- [ ] Privacy policy URL
- [ ] Upload APK/AAB
- [ ] Configure pricing
- [ ] Set target countries
- [ ] Alpha/Beta testing (optional)

#### Apple App Store
- [ ] Create app in App Store Connect
- [ ] Upload screenshots
- [ ] Write app description
- [ ] Set category
- [ ] Privacy information
- [ ] Upload build from EAS
- [ ] TestFlight testing (optional)
- [ ] Submit for review

## Production Deployment

### Before Release
- [ ] Final testing on production build
- [ ] Backup database schema
- [ ] Prepare release notes
- [ ] Marketing materials ready
- [ ] Support channels ready
- [ ] Monitoring setup (crash reporting)

### Release
- [ ] Submit to Google Play Store
- [ ] Submit to Apple App Store
- [ ] Update website (if any)
- [ ] Announce release
- [ ] Monitor for issues

### Post-Release
- [ ] Monitor crash reports
- [ ] Monitor user reviews
- [ ] Track analytics
- [ ] Respond to user feedback
- [ ] Plan updates

## Version Control

### Git
```bash
# Tag release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

### Checklist
- [ ] Code committed
- [ ] Tagged version
- [ ] Pushed to remote
- [ ] Release notes created
- [ ] Changelog updated

## Rollback Plan

If something goes wrong:

1. **Immediate Actions**
   - [ ] Remove app from stores (if critical bug)
   - [ ] Notify users
   - [ ] Disable new user registration (if needed)

2. **Fix & Redeploy**
   - [ ] Identify issue
   - [ ] Fix in code
   - [ ] Test thoroughly
   - [ ] Build new version
   - [ ] Submit update

3. **Communication**
   - [ ] Update app description with known issues
   - [ ] Respond to user reviews
   - [ ] Post on social media (if any)

## Maintenance Schedule

### Weekly
- [ ] Check crash reports
- [ ] Review user feedback
- [ ] Monitor performance metrics

### Monthly
- [ ] Dependency updates
- [ ] Security patches
- [ ] Feature improvements
- [ ] Bug fixes

### Quarterly
- [ ] Major feature releases
- [ ] UI/UX improvements
- [ ] Performance optimization

## Support Preparation

### Documentation for Users
- [ ] Installation guide
- [ ] User manual
- [ ] FAQ
- [ ] Troubleshooting guide
- [ ] Contact information

### Support Channels
- [ ] Email support
- [ ] In-app feedback
- [ ] Social media
- [ ] Website contact form

## Analytics & Monitoring

### Tools to Setup
- [ ] Firebase Analytics
- [ ] Crashlytics
- [ ] Performance monitoring
- [ ] User behavior tracking

### Metrics to Track
- [ ] Daily active users
- [ ] Monthly active users
- [ ] Retention rate
- [ ] Crash-free rate
- [ ] Session length
- [ ] Feature usage

## Compliance

### Privacy
- [ ] Privacy policy created
- [ ] GDPR compliance (if EU users)
- [ ] Data collection disclosed
- [ ] User consent implemented

### Legal
- [ ] Terms of service
- [ ] License information
- [ ] Third-party attributions
- [ ] Copyright notices

## Security

### Pre-Release Security Check
- [ ] No hardcoded secrets
- [ ] API keys secured
- [ ] SSL/TLS for network calls
- [ ] Data encryption at rest
- [ ] Secure data transmission
- [ ] Input validation
- [ ] SQL injection prevention
- [ ] XSS prevention

## Final Checklist

Before hitting "Release" button:
- [ ] All tests passing
- [ ] No critical bugs
- [ ] Performance acceptable
- [ ] UI polished
- [ ] Documentation complete
- [ ] Support ready
- [ ] Marketing ready
- [ ] Backup plan ready

## Post-Deployment Monitoring

First 24 hours:
- [ ] Monitor crash rate
- [ ] Check server load
- [ ] Review initial feedback
- [ ] Track downloads
- [ ] Monitor social media

First week:
- [ ] Analyze usage patterns
- [ ] Review all feedback
- [ ] Fix critical issues
- [ ] Plan hotfix if needed

First month:
- [ ] Comprehensive analytics review
- [ ] Plan next update
- [ ] Gather feature requests
- [ ] Evaluate success metrics

---

## Quick Reference

### Build Commands
```bash
# Development
npm start

# Production build (Android)
eas build --platform android --profile production

# Production build (iOS)
eas build --platform ios --profile production

# Both platforms
eas build --platform all --profile production
```

### Version Bump
```json
// app.json
{
  "expo": {
    "version": "1.0.0",  // User-facing version
    "android": {
      "versionCode": 1   // Increment for each build
    },
    "ios": {
      "buildNumber": "1" // Increment for each build
    }
  }
}
```

---

**Remember:** Test thoroughly before releasing!

Good luck with your deployment! 🚀
